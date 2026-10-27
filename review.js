(function(){
 'use strict';
 const {paths,readReviewState,reviewURL}=AltruJourneys;
 const $=s=>document.querySelector(s),frame=$('#prototype');
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const arrow='<svg class="card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';
 let current=readReviewState(location.search),ready=false,started=false,token=0,loadTimer=null,collapsed=false;
 const card=p=>`<a class="path-card" href="${reviewURL(p.id)}" data-path="${p.id}"><h3>${esc(p.title)}</h3><p>${esc(p.goal)}</p><span class="card-action"><span>Walk through this path ${arrow}</span><small>${p.steps.length} steps</small></span></a>`;
 const groups=[...new Set(paths.map(p=>p.group))];
 $('#path-groups').innerHTML=groups.map((group,i)=>`<section class="path-group" aria-labelledby="group-${i}"><div class="group-heading"><h2 id="group-${i}">${esc(group)}</h2></div><div class="path-cards">${paths.filter(p=>p.group===group).map(card).join('')}</div></section>`).join('');
 function announce(text){$('#review-announcer').textContent=text;}
 function controls(loading){
  $('#previous').disabled=loading||current.index===0;
  $('#next').disabled=loading;
  $('#restore-step').disabled=loading;
  $('#preview').setAttribute('aria-busy',String(loading));
 }
 function failure(){
  clearTimeout(loadTimer);$('#preview-status').hidden=true;$('#preview-error').hidden=false;
  controls(false);$('#next').disabled=true;announce('The mockup could not be shown. Try again or open the original mockup.');
 }
 function sendStep(){
  if(!ready||!current.path||current.index>=current.path.steps.length)return;
  clearTimeout(loadTimer);controls(true);$('#preview-error').hidden=true;
  const step=current.path.steps[current.index];
  token++;$('#tour').dataset.step=String(current.index+1);$('#tour').dataset.path=current.path.id;$('#tour').dataset.ready='false';
  frame.contentWindow.postMessage({type:'altru-review-show',...step,token},location.origin);
  loadTimer=setTimeout(failure,10000);
 }
 function loadPreview(){
  ready=false;started=true;$('#preview-status').hidden=false;$('#preview-error').hidden=true;controls(true);
  frame.src=new URL('index.html',document.baseURI).href;
  clearTimeout(loadTimer);loadTimer=setTimeout(failure,15000);
 }
 frame.addEventListener('load',()=>{
  if(!started)return;
  try{
   const doc=frame.contentDocument;
   if(!doc?.querySelector('#main'))return;
   const script=doc.createElement('script');script.src=new URL('review-bridge.js',document.baseURI).href;script.onerror=failure;doc.head.append(script);
  }catch{failure();}
 });
 window.addEventListener('message',event=>{
  if(event.source!==frame.contentWindow||event.origin!==location.origin)return;
  const message=event.data;if(!message||typeof message!=='object')return;
  if(message.type==='altru-review-ready'){ready=true;clearTimeout(loadTimer);sendStep();return;}
  if(message.token!==token)return;
  if(message.type==='altru-review-shown'){
   if(!message.ok){failure();return;}
   clearTimeout(loadTimer);$('#preview-status').hidden=true;controls(false);$('#tour').dataset.ready='true';$('#tour').dataset.target=message.target;
   announce(`${current.path.title}. Step ${current.index+1} of ${current.path.steps.length}: ${current.path.steps[current.index].title}.`);
  }
  if(message.type==='altru-review-advance'&&current.path&&current.index<current.path.steps.length)go(current.path.id,current.index+1,false);
 });
 function render(focus=true){
  clearTimeout(loadTimer);
  const path=current.path,complete=path&&current.index===path.steps.length;
  $('#home').hidden=Boolean(path);$('#tour').hidden=!path||complete;$('#complete').hidden=!complete;
  document.body.dataset.view=complete?'complete':path?'tour':'home';
  $('.skip-link').href=complete?'#complete-title':path?'#step-title':'#home-title';
  $('#invalid-link').hidden=!current.invalid;
  if(!path){
   document.title='Suggested user journeys for Altru | Specbee';window.scrollTo({top:0,behavior:'instant'});
   if(ready)frame.contentWindow.postMessage({type:'altru-review-stop'},location.origin);
   if(focus)$('#home-title').focus({preventScroll:true});return;
  }
  document.title=path.title+' | Altru user-flow review';
  if(complete){
   $('#complete-path').textContent=path.title;$('#complete-goal').textContent=path.goal;$('#complete-outcome').textContent=path.outcome;$('#complete-question').textContent=path.question;
   $('#related-paths').innerHTML=path.related.map(id=>card(paths.find(p=>p.id===id))).join('');
   if(ready)frame.contentWindow.postMessage({type:'altru-review-stop'},location.origin);
   window.scrollTo({top:0,behavior:'instant'});if(focus)$('#complete-title').focus({preventScroll:true});
   announce('End of path: '+path.title+'. Choose another journey or walk through again.');return;
  }
  const step=path.steps[current.index];
  $('#path-title').textContent=path.title;$('#path-goal').textContent=path.goal;
  $('#step-count').textContent=`Step ${current.index+1} of ${path.steps.length}`;
  $('#step-progress').max=path.steps.length;$('#step-progress').value=current.index+1;
  $('#step-title').textContent=step.title;$('#step-note').textContent=step.note;$('#step-try').textContent=step.try;
  $('#next').textContent=current.index===path.steps.length-1?'Finish':'Next';
  $('#next').setAttribute('aria-label',current.index===path.steps.length-1?'Finish this path':'Next step');
  $('#notes').scrollTop=0;
  if(focus)$('#step-title').focus({preventScroll:true});
  if(!started)loadPreview();else if(ready)sendStep();else controls(true);
 }
 function go(id,index=0,newEntry=true){
  const url=id?reviewURL(id,index):location.pathname;
  if(newEntry)history.pushState(null,'',url);else history.replaceState(null,'',url);
  current=readReviewState(location.search);render();
 }
 document.addEventListener('click',event=>{
  const link=event.target.closest('a[data-path],a[data-home]');if(!link||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  event.preventDefault();if(link.hasAttribute('data-home'))go(null);else go(link.dataset.path);
 });
 $('#previous').addEventListener('click',()=>go(current.path.id,current.index-1,false));
 $('#next').addEventListener('click',()=>go(current.path.id,current.index+1,false));
 $('#restart-path').addEventListener('click',()=>go(current.path.id,0,false));
 $('#repeat-path').addEventListener('click',()=>go(current.path.id,0,false));
 $('#restore-step').addEventListener('click',()=>{if(ready)sendStep();else loadPreview();});
 $('#retry-preview').addEventListener('click',loadPreview);
 $('#toggle-notes').addEventListener('click',()=>{
  collapsed=!collapsed;$('#tour').classList.toggle('notes-collapsed',collapsed);
  $('#toggle-notes').textContent=collapsed?'Show notes':'Hide notes';$('#toggle-notes').setAttribute('aria-expanded',String(!collapsed));
 });
 window.addEventListener('popstate',()=>{current=readReviewState(location.search);render();});
 render(false);
})();

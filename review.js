(function(){
 'use strict';
 const {paths,readReviewState,reviewURL,revision}=AltruJourneys;
 const $=s=>document.querySelector(s),frame=$('#prototype');
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const arrow='<svg class="card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';
 let current=readReviewState(location.search),loadTimer=null,fitRequest=0;
 const cursor=$('#guide-cursor');
 const card=p=>`<a class="path-card" href="${reviewURL(p.id)}" data-path="${p.id}"><h3>${esc(p.title)}</h3><p>${esc(p.goal)}</p><span class="card-action"><span>Walk through this path ${arrow}</span><small>${p.steps.length} steps</small></span></a>`;
 const groups=[...new Set(paths.map(p=>p.group))];
 $('#path-groups').innerHTML=groups.map((group,i)=>`<section class="path-group" aria-labelledby="group-${i}"><div class="group-heading"><h2 id="group-${i}">${esc(group)}</h2></div><div class="path-cards">${paths.filter(p=>p.group===group).map(card).join('')}</div></section>`).join('');
 function announce(text){$('#review-announcer').textContent=text;}
 function controls(loading){
  $('#previous').disabled=loading||current.index===0;
  $('#next').disabled=loading;
  $('#replay-pointer').disabled=loading;
  $('#preview').setAttribute('aria-busy',String(loading));
 }
 function hidePointer(){cursor.hidden=true;cursor.classList.remove('cue-active');}
 function pointToAction(animate=false){
  if(!current.path||current.index>=current.path.steps.length){hidePointer();return;}
  const doc=frame.contentDocument,action=doc?.querySelector('a[data-guide-next]');
  let rect;
  if(action){
   const local=action.getBoundingClientRect(),outer=frame.getBoundingClientRect();
   rect={right:outer.left+local.right,bottom:outer.top+local.bottom};
  }else rect=$('#next').getBoundingClientRect();
  const point=AltruReviewFit.cursorPoint(rect,{left:0,top:0,width:innerWidth,height:innerHeight},cursor.offsetWidth||32,cursor.offsetHeight||38);
  cursor.style.left=point.left+'px';cursor.style.top=point.top+'px';cursor.style.setProperty('--cue-x',point.left<28?'14px':'-14px');cursor.style.setProperty('--cue-y',point.top<28?'18px':'-18px');cursor.hidden=false;
  if(animate){
   cursor.classList.remove('cue-active');void cursor.offsetWidth;
   if(!matchMedia('(prefers-reduced-motion: reduce)').matches)cursor.classList.add('cue-active');
  }
 }
 function fitPreview(animate=false){
  if(!current.path||current.index>=current.path.steps.length)return;
  const doc=frame.contentDocument,sheet=doc?.querySelector('#scene-sheet');
  if(!sheet||!frame.clientWidth||!frame.clientHeight||(!animate&&$('#tour').dataset.ready!=='true'))return;
  const inset=frame.clientWidth<=580?12:16;
  sheet.style.cssText='position:absolute;margin:0;left:0;top:0;transform:none;width:'+Math.max(1,frame.clientWidth-2*inset)+'px';
  const fit=AltruReviewFit.fitScene(frame.clientWidth,frame.clientHeight,sheet.offsetWidth,sheet.offsetHeight,inset);
  sheet.style.left=fit.left+'px';sheet.style.top=fit.top+'px';sheet.style.transform='scale('+fit.scale+')';
  doc.documentElement.scrollTop=0;doc.body.scrollTop=0;
  doc.documentElement.dataset.fitScale=String(fit.scale);
  doc.documentElement.dataset.fitReady='true';
  pointToAction(animate);
 }
 function scheduleFit(){cancelAnimationFrame(fitRequest);fitRequest=requestAnimationFrame(()=>fitPreview());}
 function failure(){
  hidePointer();clearTimeout(loadTimer);$('#preview-status').hidden=true;$('#preview-error').hidden=false;
  controls(false);$('#tour').dataset.ready='false';
  announce('This prepared screen could not be shown. Try again, or use Next to continue the walkthrough.');
 }
 function showStep(){
  hidePointer();clearTimeout(loadTimer);controls(true);$('#preview-status').hidden=false;$('#preview-error').hidden=true;
  const step=current.path.steps[current.index];
  $('#tour').dataset.step=String(current.index+1);$('#tour').dataset.path=current.path.id;$('#tour').dataset.ready='false';
  frame.src=new URL('review-scenes/'+step.screen+'.html?v='+revision,document.baseURI).href;
  loadTimer=setTimeout(failure,10000);
 }
 frame.addEventListener('load',()=>{
  if(!current.path||current.index>=current.path.steps.length)return;
  try{
   const doc=frame.contentDocument,step=current.path.steps[current.index];
   if(!doc||!frame.contentWindow.location.pathname.endsWith('/'+step.screen+'.html'))return;
   if(!doc.querySelector('#scene-sheet')){failure();return;}
   // These links have a native top-level destination as a fallback. Keeping the
   // controller in the parent avoids a mockup runtime or cross-frame messages.
   doc.addEventListener('click',event=>{
    const link=event.target.closest('a[data-guide-next]');
    if(!link||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    event.preventDefault();go(current.path.id,current.index+1,false);
   });
   Promise.resolve(doc.fonts?.ready).then(()=>{
    if(frame.contentDocument!==doc||!current.path||current.path.steps[current.index]!==step)return;
    fitPreview(true);clearTimeout(loadTimer);$('#preview-status').hidden=true;controls(false);$('#tour').dataset.ready='true';
    announce(`${current.path.title}. Step ${current.index+1} of ${current.path.steps.length}: ${step.title}.`);
   });
  }catch{failure();}
 });
 function render(focus=true){
  hidePointer();clearTimeout(loadTimer);
  const path=current.path,complete=path&&current.index===path.steps.length;
  $('#home').hidden=Boolean(path);$('#tour').hidden=!path||complete;$('#complete').hidden=!complete;
  document.body.dataset.view=complete?'complete':path?'tour':'home';
  $('.skip-link').href=complete?'#complete-title':path?'#step-title':'#home-title';
  $('#invalid-link').hidden=!current.invalid;
  if(!path){
   document.title='Suggested user journeys for Altru | Specbee';window.scrollTo({top:0,behavior:'instant'});
   if(focus)$('#home-title').focus({preventScroll:true});return;
  }
  document.title=path.title+' | Altru user-flow review';
  if(complete){
   $('#complete-path').textContent=path.title;$('#complete-goal').textContent=path.goal;$('#complete-outcome').textContent=path.outcome;$('#complete-question').textContent=path.question;
   $('#related-paths').innerHTML=path.related.map(id=>card(paths.find(p=>p.id===id))).join('');
   window.scrollTo({top:0,behavior:'instant'});if(focus)$('#complete-title').focus({preventScroll:true});
   announce('End of path: '+path.title+'. Choose another journey or walk through again.');return;
  }
  const step=path.steps[current.index];
  $('#path-title').textContent=path.title;
  $('#step-count').textContent=`Step ${current.index+1} of ${path.steps.length}`;
  $('#step-progress').max=path.steps.length;$('#step-progress').value=current.index+1;
  $('#step-title').textContent=step.title;$('#step-note').textContent=step.note;$('#step-short').textContent=step.short||step.note.split(/(?<=[.!?])\s+/)[0];$('#step-try').textContent=step.try;
  $('#next').textContent=current.index===path.steps.length-1?'Finish':'Next';
  $('#next').setAttribute('aria-label',current.index===path.steps.length-1?'Finish this path':'Next step');
  $('#notes').scrollTop=0;
  if(focus)$('#step-title').focus({preventScroll:true});
  showStep();
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
 $('#retry-preview').addEventListener('click',showStep);
 $('#replay-pointer').addEventListener('click',()=>pointToAction(true));
 cursor.addEventListener('animationend',()=>cursor.classList.remove('cue-active'));
 window.addEventListener('resize',scheduleFit);
 if(typeof ResizeObserver!=='undefined')new ResizeObserver(scheduleFit).observe($('#preview'));
 document.addEventListener('visibilitychange',()=>{if(document.hidden)hidePointer();else pointToAction();});
 window.addEventListener('popstate',()=>{current=readReviewState(location.search);render();});
 render(false);
})();

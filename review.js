(function(){
 'use strict';
 const {paths,readReviewState,reviewURL,revision}=AltruJourneys;
 const $=s=>document.querySelector(s),frame=$('#prototype'),tour=$('#tour'),cursor=$('#guide-cursor');
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const arrow='<svg class="card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let current=readReviewState(location.search),loadTimer=null,layout=null,phone=innerWidth<600;
 let point={x:80,y:100},phase='ready',previousPage=null,previousScroll=0,fitRequest=0;
 const playback=AltruReviewFit.createPlaybackState();
 const clock=AltruReviewFit.createClock(requestAnimationFrame,()=>playback.isPlaying&&!document.hidden);
 const card=p=>`<a class="path-card" href="${reviewURL(p.id)}" data-path="${p.id}"><h3>${esc(p.title)}</h3><p>${esc(p.goal)}</p><span class="card-action"><span>Open this journey ${arrow}</span><small>${p.steps.length} steps</small></span></a>`;
 const groups=[...new Set(paths.map(p=>p.group))];
 $('#path-groups').innerHTML=groups.map((g,i)=>`<section class="path-group" aria-labelledby="group-${i}"><div class="group-heading"><h2 id="group-${i}">${esc(g)}</h2></div><div class="path-cards">${paths.filter(p=>p.group===g).map(card).join('')}</div></section>`).join('');
 function announce(s){$('#review-announcer').textContent=s;}
 function status(text){$('#demo-status').textContent=(!playback.isPlaying&&!text.startsWith('Paused')?'Paused · ':'')+text;tour.dataset.phase=phase;}
 function setPlayback(action){
  playback.transition(action);const running=playback.isPlaying;
  tour.dataset.playing=String(running);tour.dataset.playback=playback.mode;
  $('#play-demo').textContent=running?'Pause':'Play';$('#play-demo').setAttribute('aria-label',running?'Pause visitor demo':'Play visitor demo');
  if(!running&&tour.dataset.ready==='true')status('Paused · '+(phase==='ready'?'Press Play to watch the visitor':$('#step-try').textContent));
 }
 function controls(loading){
  $('#previous').disabled=loading||current.index===0;$('#next').disabled=loading;$('#play-demo').disabled=loading;$('#replay-step').disabled=loading;$('#preview').setAttribute('aria-busy',String(loading));
 }
 function hideCursor(){cursor.hidden=true;cursor.classList.remove('clicking');}
 function drawCursor(){
  if(!layout||!current.path||tour.hidden)return;
  point={x:Math.max(8,Math.min(layout.width-40,point.x)),y:Math.max(8,Math.min(layout.height-44,point.y))};
  const box=frame.getBoundingClientRect();cursor.style.left=(box.left+point.x*layout.scale)+'px';cursor.style.top=(box.top+point.y*layout.scale)+'px';cursor.hidden=false;
 }
 function fitPreview(){
  const stage=$('#site-stage');if(!stage.clientWidth||!stage.clientHeight)return;
  layout=AltruReviewFit.fitViewport(stage.clientWidth,stage.clientHeight,phone);
  const box=$('#site-viewport');box.style.width=layout.width+'px';box.style.height=layout.height+'px';box.style.left=layout.left+'px';box.style.top=layout.top+'px';box.style.transform='scale('+layout.scale+')';
  $('#device-desktop').setAttribute('aria-pressed',String(!phone));$('#device-phone').setAttribute('aria-pressed',String(phone));drawCursor();
 }
 function scheduleFit(){cancelAnimationFrame(fitRequest);fitRequest=requestAnimationFrame(fitPreview);}
 const ease=t=>t*t*(3-2*t),tween=(ms,fn,token)=>clock.tween(reduced.matches?0:ms,fn,token),hold=(ms,token)=>clock.tween(ms,()=>{},token);
 async function moveTo(target,token){
  if(target.ownerDocument!==frame.contentDocument)throw new Error('The visitor cursor must stay inside the website.');
  const destination=AltruReviewFit.targetPoint(target.getBoundingClientRect()),start={...point};
  return tween(700,t=>{const q=ease(t);point={x:start.x+(destination.x-start.x)*q,y:start.y+(destination.y-start.y)*q};drawCursor();},token);
 }
 function focusTarget(doc,target){doc.querySelectorAll('.demo-highlight').forEach(x=>x.classList.remove('demo-highlight'));target.classList.add('demo-highlight');}
 function previewPausedStep(doc,step){
  if(step.demo.typing){doc.querySelector(step.demo.typing.selector).value=step.demo.typing.text;doc.querySelector('[data-demo-reveal]')?.removeAttribute('hidden');}
  let target=doc.querySelector('[data-demo-action]')||doc.querySelector('[data-review-focus]');
  if(target&&!target.getBoundingClientRect().height&&phone)target=doc.querySelector('[data-guide-menu]')||target;
  if(!target||!target.getBoundingClientRect().height)return;
  for(let a=target.parentElement;a&&a!==doc.body;a=a.parentElement){
   if(a.scrollHeight>a.clientHeight+2&&/(auto|scroll)/.test(frame.contentWindow.getComputedStyle(a).overflowY))a.scrollTop+=target.getBoundingClientRect().top-a.getBoundingClientRect().top-a.clientHeight*.30;
  }
  const r=target.getBoundingClientRect();
  if(!target.closest('#modal[open]')&&(r.top<20||r.bottom>layout.height-20))doc.scrollingElement.scrollTop+=r.top-(r.height>layout.height*.65?40:layout.height*.35);
  if(step.demo.kind!=='read'&&step.demo.kind!=='reference')focusTarget(doc,target);
  const pointerTarget=step.demo.kind==='read'?(target.querySelector('h1,h2,h3')||target):target;
  point=AltruReviewFit.targetPoint(pointerTarget.getBoundingClientRect());drawCursor();
 }
 async function scrollToTarget(doc,target,token){
  for(let ancestor=target.parentElement;ancestor&&ancestor!==doc.body;ancestor=ancestor.parentElement){
   const style=frame.contentWindow.getComputedStyle(ancestor);
   if(ancestor.scrollHeight>ancestor.clientHeight+2&&/(auto|scroll)/.test(style.overflowY)){
    const r=target.getBoundingClientRect(),a=ancestor.getBoundingClientRect(),start=ancestor.scrollTop;
    const end=Math.max(0,Math.min(ancestor.scrollHeight-ancestor.clientHeight,start+r.top-a.top-ancestor.clientHeight*.30));
    if(Math.abs(end-start)>4&&!await tween(650,t=>{ancestor.scrollTop=start+(end-start)*ease(t);},token))return false;
   }
  }
  if(target.closest('#modal[open]'))return true;
  const scroller=doc.scrollingElement,r=target.getBoundingClientRect(),start=scroller.scrollTop;
  const tooTall=r.height>layout.height*.65,desired=start+r.top-(tooTall?50:layout.height*.35),end=Math.max(0,Math.min(scroller.scrollHeight-layout.height,desired));
  if(r.top<30||r.bottom>layout.height-24||tooTall){if(!await tween(1000,t=>{scroller.scrollTop=start+(end-start)*ease(t);},token))return false;}
  return true;
 }
 async function clickAt(target,token){
  if(!await moveTo(target,token))return false;
  cursor.classList.add('clicking');if(!await hold(400,token))return false;cursor.classList.remove('clicking');return true;
 }
 async function openPhoneNavigation(doc,target,token){
  const nav=doc.querySelector('#site-navigation'),button=doc.querySelector('.mobile-menu');
  if(!phone||!nav||!nav.contains(target)||nav.getBoundingClientRect().height>0)return true;
  status('Visitor opens the navigation menu');if(!await clickAt(button,token))return false;
  doc.querySelector('.header-inner').classList.add('nav-open');button.setAttribute('aria-expanded','true');button.setAttribute('aria-label','Close navigation');return hold(800,token);
 }
 async function runStep(doc,step,token){
  const demo=step.demo,focus=doc.querySelector('[data-review-focus]'),action=doc.querySelector('[data-demo-action]');
  phase='watching';status(playback.isPlaying?step.try:'Paused · Follow the website action, use Next, or choose Play.');if(!await hold(550,token))return;
  if(demo.kind==='reference'){
   phase='reading';status('Visitor reads the existing Altru.org clinical information');
   if(!await moveTo(focus,token)||!await hold(3400,token))return;
  }else{
   if(demo.page.includes(':profile:')){phase='reading';status('Visitor reviews the provider profile');if(!await hold(1500,token))return;}
   const target=action||focus;if(!await openPhoneNavigation(doc,target,token))return;
   if(demo.typing){
    const field=doc.querySelector(demo.typing.selector);phase='typing';status('Visitor types “'+demo.typing.text+'”');
    field.value='';const reveal=doc.querySelector('[data-demo-reveal]');if(reveal)reveal.hidden=true;
    if(!await scrollToTarget(doc,field,token)||!await clickAt(field,token))return;
    field.classList.add('demo-typing');
    if(!await tween(Math.max(800,demo.typing.text.length*90),t=>{field.value=demo.typing.text.slice(0,Math.ceil(t*demo.typing.text.length));},token))return;
    field.classList.remove('demo-typing');doc.querySelector('[data-demo-reveal]')?.removeAttribute('hidden');if(!await hold(850,token))return;
   }
   phase=demo.kind==='read'?'reading':'acting';status(step.try);if(!await scrollToTarget(doc,target,token))return;if(demo.kind!=='read')focusTarget(doc,target);
   if(demo.kind==='read'){
    if(!await moveTo(target.querySelector('h1,h2,h3')||target,token)||!await hold(3000,token))return;
   }else if(demo.kind==='select'){
    if(!await clickAt(target,token))return;
    const options=doc.querySelector('[data-demo-options]'),r=target.getBoundingClientRect();options.style.left=Math.max(12,Math.min(r.left,layout.width-r.width-12))+'px';options.style.width=r.width+'px';options.style.maxHeight=(layout.height-24)+'px';options.style.overflow='auto';options.hidden=false;
    options.style.top=(r.bottom+options.offsetHeight<layout.height-12?r.bottom:Math.max(12,r.top-options.offsetHeight))+'px';
    if(!await hold(900,token)||!await clickAt(options.querySelector('[data-demo-choice]'),token))return;
    target.value=demo.value;options.hidden=true;
   }else if(!await hold(750,token)||!await clickAt(target,token))return;
   if(demo.handoff){$('#handoff-status').textContent=demo.handoff+' opens in a new tab';$('#handoff-status').hidden=false;if(!await hold(1800,token))return;}
   if(!await hold(1000,token))return;
  }
  if(token===clock.token&&playback.isPlaying)go(current.path.id,current.index+1,false,true);
 }
 function failure(){
  clock.cancel();hideCursor();clearTimeout(loadTimer);setPlayback('pause');$('#preview-status').hidden=true;$('#preview-error').hidden=false;controls(false);tour.dataset.ready='false';announce('This prepared screen could not be shown. Try again, or use Next.');
 }
 function showStep(){
  clock.cancel();hideCursor();clearTimeout(loadTimer);controls(true);phase='ready';$('#preview-status').hidden=false;$('#preview-error').hidden=true;$('#handoff-status').hidden=true;
  const step=current.path.steps[current.index];tour.dataset.step=String(current.index+1);tour.dataset.path=current.path.id;tour.dataset.ready='false';
  $('#site-address').textContent=step.demo.kind==='reference'?'altru.org / Cardiac Electrophysiology':'Altru concept · '+(step.demo.page.startsWith('services/')?'Heart & Vascular Care':step.demo.page.startsWith('locations/')?'Location details':'Find a Provider');
  frame.src=new URL('review-scenes/'+step.screen+'.html?v='+revision,document.baseURI).href;loadTimer=setTimeout(failure,10000);
 }
 frame.addEventListener('load',()=>{
  if(!current.path||current.index>=current.path.steps.length)return;
  try{
   const doc=frame.contentDocument,step=current.path.steps[current.index];if(!doc||!frame.contentWindow.location.pathname.endsWith('/'+step.screen+'.html'))return;
   if(!doc.querySelector('[data-review-focus]')){failure();return;}
   doc.addEventListener('click',event=>{const link=event.target.closest('a[data-guide-next]');if(!link)return;event.preventDefault();go(current.path.id,current.index+1,false);});
   const menuButton=doc.querySelector('[data-guide-menu]');
   if(phone&&menuButton){
    menuButton.disabled=false;menuButton.removeAttribute('tabindex');
    menuButton.addEventListener('click',()=>{
     clock.cancel();setPlayback('pause');const opened=doc.querySelector('.header-inner').classList.toggle('nav-open');
     menuButton.setAttribute('aria-expanded',String(opened));menuButton.setAttribute('aria-label',opened?'Close navigation':'Open navigation');
     previewPausedStep(doc,step);
     runStep(doc,step,clock.token).catch(failure);
    });
   }
   Promise.resolve(doc.fonts?.ready).then(()=>{
    if(frame.contentDocument!==doc||!current.path||current.path.steps[current.index]!==step)return;
    fitPreview();doc.scrollingElement.scrollTop=previousPage===step.demo.page?previousScroll:0;
    point={x:Math.min(layout.width-60,Math.max(40,point.x)),y:Math.min(layout.height-60,Math.max(40,point.y))};
    clearTimeout(loadTimer);$('#preview-status').hidden=true;controls(false);tour.dataset.ready='true';if(!playback.isPlaying)previewPausedStep(doc,step);announce(`${current.path.title}. Step ${current.index+1} of ${current.path.steps.length}: ${step.title}.`);
    status(playback.isPlaying?step.try:'Paused · Use the website action or Next. Play is optional.');runStep(doc,step,clock.token).catch(failure);
   });
  }catch{failure();}
 });
 function render(focus=true){
  clock.cancel();hideCursor();clearTimeout(loadTimer);const path=current.path,complete=path&&current.index===path.steps.length;
  $('#home').hidden=Boolean(path);tour.hidden=!path||complete;$('#complete').hidden=!complete;document.body.dataset.view=complete?'complete':path?'tour':'home';$('.skip-link').href=complete?'#complete-title':path?'#step-title':'#home-title';$('#invalid-link').hidden=!current.invalid;
  if(!path){setPlayback('pause');document.title='Suggested user journeys for Altru | Specbee';window.scrollTo(0,0);if(focus)$('#home-title').focus({preventScroll:true});return;}
  document.title=path.title+' | Altru user-flow review';
  if(complete){setPlayback('pause');$('#complete-path').textContent=path.title;$('#complete-goal').textContent=path.goal;$('#complete-outcome').textContent=path.outcome;$('#complete-question').textContent=path.question;$('#related-paths').innerHTML=path.related.map(id=>card(paths.find(p=>p.id===id))).join('');window.scrollTo(0,0);if(focus)$('#complete-title').focus({preventScroll:true});return;}
  const step=path.steps[current.index];$('#path-title').textContent=path.title;$('#step-count').textContent=`Step ${current.index+1} of ${path.steps.length}`;$('#step-progress').max=path.steps.length;$('#step-progress').value=current.index+1;
  $('#step-title').textContent=step.title;$('#step-note').textContent=step.note;$('#step-short').textContent=step.short;$('#step-try').textContent=step.try;$('#next').textContent=current.index===path.steps.length-1?'Finish':'Next';$('#notes').scrollTop=0;
  if(focus&&!playback.isPlaying)$('#step-title').focus({preventScroll:true});showStep();
 }
 function go(id,index=0,newEntry=true,continuePlayback=false){
  const old=current.path?.steps[current.index];previousPage=old?.demo.page;previousScroll=frame.contentDocument?.scrollingElement?.scrollTop||0;
  const url=id?reviewURL(id,index):location.pathname;if(newEntry)history.pushState(null,'',url);else history.replaceState(null,'',url);
  if(newEntry||index===0){previousPage=null;previousScroll=0;}current=readReviewState(location.search);setPlayback(continuePlayback?'continue':'navigate');render();
 }
 document.addEventListener('click',event=>{
  const link=event.target.closest('a[data-path],a[data-home]');if(!link||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  event.preventDefault();if(link.hasAttribute('data-home'))go(null);else go(link.dataset.path);
 });
 $('#play-demo').addEventListener('click',()=>{setPlayback('toggle');if(playback.isPlaying)status(current.path.steps[current.index].try);});
 $('#previous').addEventListener('click',()=>go(current.path.id,current.index-1,false));$('#next').addEventListener('click',()=>go(current.path.id,current.index+1,false));
 $('#restart-path').addEventListener('click',()=>go(current.path.id,0,false));$('#repeat-path').addEventListener('click',()=>go(current.path.id,0,false));
 $('#retry-preview').addEventListener('click',showStep);$('#replay-step').addEventListener('click',()=>{previousPage=null;previousScroll=0;setPlayback('replay');showStep();});
 for(const [id,value] of [['device-desktop',false],['device-phone',true]])$('#'+id).addEventListener('click',()=>{phone=value;previousPage=null;previousScroll=0;setPlayback('navigate');showStep();});
 window.addEventListener('resize',scheduleFit);if(typeof ResizeObserver!=='undefined')new ResizeObserver(scheduleFit).observe($('#site-stage'));
 document.addEventListener('visibilitychange',()=>{if(document.hidden)setPlayback('pause');});window.addEventListener('popstate',()=>{current=readReviewState(location.search);setPlayback('navigate');render();});
 setPlayback('navigate');render(false);
})();

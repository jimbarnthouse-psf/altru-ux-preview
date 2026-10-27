(function(){
 'use strict';
 if(window.parent===window||window.AltruReviewBridge)return;
 window.AltruReviewBridge=true;
 let active=null;
 const parentOrigin=location.origin;
 const notify=message=>parent.postMessage(message,parentOrigin==='null'?'*':parentOrigin);
 const style=document.createElement('style');
 style.textContent='.prototype-bar{display:none!important}.review-focus{outline:3px solid #00738a!important;outline-offset:5px!important;scroll-margin:20px}.review-focus:focus{outline:3px solid #00738a!important}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto!important}}';
 document.head.append(style);
 function clearHighlight(){document.querySelectorAll('.review-focus').forEach(el=>el.classList.remove('review-focus'));}
 function show(message){
  active=null;clearHighlight();
  const {scene={},focus,compactFocus,advance,token}=message;
  try{
   closeModal();hideSuggestions();setMenuOpen(false);
   Object.assign(state,{q:'',origin:scene.origin||null,area:'all',radius:'all',specialty:'all',facility:null,view:'providers',sort:scene.origin?'distance':'name',showFar:false});
   document.querySelector('#query').value='';
   const route=scene.route||'providers';
   history.replaceState(null,'','#'+route);ServiceUX.go(route);
   if(ServiceUX.isDirectory()){
    if(scene.q!==undefined)state.q=scene.q;
    if(scene.specialty)state.specialty=scene.specialty;
    if(scene.facility)state.facility=scene.facility;
    document.querySelector('#query').value=scene.q||'';render();
   }
   if(scene.draft!==undefined)document.querySelector('#query').value=scene.draft;
   if(scene.suggestions)suggestions();
   if(scene.menu){setMenuOpen(true);if(document.querySelector('#services-menu').hidden)document.querySelector('#services-toggle').click();}
   if(scene.modal==='origin')originModal();
   if(scene.modal==='clinic'){
    LocationUX.open();
    if(scene.clinicQuery){clinicQuery=scene.clinicQuery;document.querySelector('#clinic-query').value=scene.clinicQuery;LocationUX.render();}
    if(scene.clinicOriginDraft)document.querySelector('#clinic-origin').value=scene.clinicOriginDraft;
   }
   if(scene.profile)profile(scene.profile,scene.context||null);
   let target=document.querySelector(focus);
   if(target&&!target.getClientRects().length&&target.closest('.header-right')){setMenuOpen(true);target=document.querySelector(focus);}
   if((!target||!target.getClientRects().length)&&compactFocus)target=document.querySelector(compactFocus);
   if(!target||!target.getClientRects().length)throw Error('Review target unavailable: '+focus);
   target.classList.add('review-focus');
   target.scrollIntoView({block:target.offsetHeight>innerHeight*.55?'start':'center',inline:'nearest',behavior:'instant'});
   document.documentElement.dataset.reviewToken=String(token);
   document.documentElement.dataset.reviewFocus=target===document.querySelector(focus)?focus:compactFocus;
   document.documentElement.dataset.reviewReady='true';
   active={advance,token};
   requestAnimationFrame(()=>notify({type:'altru-review-shown',token,ok:true,target:document.documentElement.dataset.reviewFocus}));
  }catch(error){
   document.documentElement.dataset.reviewReady='false';
   console.error('Walkthrough step:',error.message);
   notify({type:'altru-review-shown',token,ok:false});
  }
 }
 window.addEventListener('message',event=>{
  if(event.source!==parent||event.origin!==parentOrigin)return;
  if(event.data?.type==='altru-review-show')show(event.data);
  if(event.data?.type==='altru-review-stop'){active=null;clearHighlight();}
 });
 function action(event){
  const entry=active,rule=entry?.advance;
  if(!rule||rule.type!==event.type||!(event.target instanceof Element))return;
  const target=event.target.closest(rule.selector);if(!target)return;
  if(rule.value!==undefined&&target.value!==rule.value)return;
  active=null;
  setTimeout(()=>notify({type:'altru-review-advance',token:entry.token}),40);
 }
 for(const type of ['click','submit','change'])document.addEventListener(type,action,true);
 notify({type:'altru-review-ready'});
})();

(function(root){
 'use strict';
 // Fit the browser viewport, not the entire document. The full page scrolls inside.
 function fitViewport(width,height,phone=false){
  const contentWidth=phone?390:1200;
  const widthScale=Math.min(1,Math.max(1,width-16)/contentWidth);
  const contentHeight=Math.max(phone?300:620,Math.min(phone?740:800,(height-16)/widthScale));
  const scale=Math.min(1,Math.max(1,width-16)/contentWidth,Math.max(1,height-16)/contentHeight);
  return {width:contentWidth,height:contentHeight,scale,left:(width-contentWidth*scale)/2,top:(height-contentHeight*scale)/2};
 }
 function targetPoint(rect){return {x:rect.left+Math.min(rect.width*.56,Math.max(12,rect.width-12)),y:rect.top+Math.min(rect.height*.55,Math.max(8,rect.height-8))};}
 function createPlaybackState(){
  let mode='paused';
  return {
   get mode(){return mode;},get isPlaying(){return mode!=='paused';},
   transition(action){
    if(action==='toggle')mode=mode==='paused'?'journey':'paused';
    else if(action==='replay')mode='step';
    else if(action==='continue')mode=mode==='journey'?'journey':'paused';
    else mode='paused';
    return mode;
   }
  };
 }
 function createClock(requestFrame,canRun){
  let generation=0;
  return {
   cancel(){return ++generation;},get token(){return generation;},
   tween(duration,draw,token=generation){return new Promise(resolve=>{
    let elapsed=0,last;
    const tick=time=>{
     if(token!==generation){resolve(false);return;}
     const delta=last===undefined?0:Math.min(64,Math.max(0,time-last));last=time;
     if(canRun()){elapsed+=delta;draw(duration?Math.min(1,elapsed/duration):1);if(elapsed>=duration){resolve(true);return;}}
     requestFrame(tick);
    };requestFrame(tick);
   });}
  };
 }
 const api={fitViewport,targetPoint,createClock,createPlaybackState};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AltruReviewFit=api;
})(typeof window!=='undefined'?window:this);

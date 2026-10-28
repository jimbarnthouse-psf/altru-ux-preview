(function(root){
 'use strict';
 function fitScene(viewWidth,viewHeight,contentWidth,contentHeight,padding=12){
  const width=Math.max(1,viewWidth-2*padding),height=Math.max(1,viewHeight-2*padding);
  const scale=Math.min(1,width/Math.max(1,contentWidth),height/Math.max(1,contentHeight));
  return {scale,left:Math.max(padding,(viewWidth-contentWidth*scale)/2),top:Math.max(padding,(viewHeight-contentHeight*scale)/2)};
 }
 function cursorPoint(rect,container,width=30,height=36){
  const inset=8;
  // The cursor tip rests near the action's lower-right edge, clear of its label.
  return {left:Math.max(inset,Math.min(rect.right-container.left-10,container.width-width-inset)),top:Math.max(inset,Math.min(rect.bottom-container.top-10,container.height-height-inset))};
 }
 const api={fitScene,cursorPoint};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AltruReviewFit=api;
})(typeof window!=='undefined'?window:this);

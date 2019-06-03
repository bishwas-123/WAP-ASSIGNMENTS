var start=document.getElementById("start");
var stop=document.getElementById("stop");
var animation =document.getElementById("animation");
var size=document.getElementById("size");
start.onclick=function(){
    startAnimation();
    var whichOne = "Juggler";
    document.getElementById("animation-screen-id").value = ANIMATIONS[whichOne];
}
stop.onclick=function(){
    stopAnimation();
    var whichOne = "Blank";
    document.getElementById("animation-screen-id").value = ANIMATIONS[whichOne];
}
animation.onchange=function(){
    var whichOne=this.value;
    document.getElementById("animation-screen-id").value = ANIMATIONS[whichOne];
}
size.onchange=function(){
    var whichOne=this.value;
    document.getElementById("animation-screen-id").style.fontSize=whichOne+"px";

}

function repeatAnimation(){
    var val=ocument.getElementById("animation-screen-id").value;
}

function startAnimation(){
    start.disabled=true;
    stop.disabled=false;
    animation.disabled=true;

    
    //repeatAnimation();
    // var timer = setInterval(frame, 10);
    // function frame() {
    //   if (pos == 350) {
    //     clearInterval(id);
    //   } else {
    //     pos++; 
    //     elem.style.top = pos + 'px'; 
    //     elem.style.left = pos + 'px'; 
    //   }

}
function stopAnimation(){
    start.disabled=false;
    stop.disabled=true;
    animation.disabled=false;
}

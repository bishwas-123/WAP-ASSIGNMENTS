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

function startAnimation(){
    start.disabled=true;
    stop.disabled=false;
    animation.disabled=true;

}
function stopAnimation(){
    start.disabled=false;
    stop.disabled=true;
    animation.disabled=false;
}

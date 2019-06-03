var start=document.getElementById("start");
var stop=document.getElementById("stop");
var animation =document.getElementById("animation");
start.onclick=function(){
    var whichOne = "Juggler";
    document.getElementById("animation-screen-id").value = ANIMATIONS[whichOne];
}
stop.onclick=function(){
    var whichOne = "Blank";
    document.getElementById("animation-screen-id").value = ANIMATIONS[whichOne];
}
animation.onchange=function(){
    var whichOne=this.value;
    document.getElementById("animation-screen-id").value = ANIMATIONS[whichOne];
}

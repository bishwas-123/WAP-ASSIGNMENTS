(function(){
    "use strict"
    var start=document.getElementById("start");
    var stop=document.getElementById("stop");
    var size=document.getElementById("size");
     var screen =document.getElementById("animation-screen-id");
    var timer;
    var index=0;
    var turboStatus=250;
    start.onclick=startAnimation;
    
    function startAnimation(){
        var whichOne=document.getElementById("animation");
        var whichOne = whichOne.options[whichOne.selectedIndex].value;
        if(whichOne){
            toggleEvent();
            timer=setInterval(
                function(){
                startTimer(ANIMATIONS[whichOne]);},turboStatus
            );
        }
   
    }
    document.getElementById("turbo").onchange=function(){
        clearInterval(timer);
        if(document.getElementById("turbo").checked==false){
            turboStatus=250;
        }
        else{
            turboStatus=50;
        }
        startAnimation();
    }
    function startTimer(val) {
        var str=val.split("=====\n");
         if(index==str.length){
             index=0;
         }
         var x = str[index];
         screen.value=x;
         index++;
      }
    stop.onclick=function(){
        clearInterval(timer);
        stopAnimation();
        // var whichOne = "Blank";
        // document.getElementById("animation-screen-id").value = ANIMATIONS[whichOne];
    }
    size.onchange=function(){
        var whichOne=this.value;
        document.getElementById("animation-screen-id").style.fontSize=whichOne+"px";
    
    }
    
    
    
    function toggleEvent(){
        start.disabled=true;
        stop.disabled=false;
        animation.disabled=true;
    
    
    
    }
    function stopAnimation(){
     
        start.disabled=false;
        stop.disabled=true;
        animation.disabled=false;
    }

})();



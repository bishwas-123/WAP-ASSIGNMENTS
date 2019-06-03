let bigger=document.getElementById("make-bigger");
var timerval=false;
var timer;
bigger.onclick=function(){
   // document.getElementById("comment-text").style.fontSize="24px";
   if(timerval==false){
    timer= setInterval(fontSizeDouble,5000);
    timerval=true;
   }else{
    clearTimeout(timer);
   }
}
function fontSizeDouble(){
    var element = document.getElementById('comment-text');
   var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
   var fontSize = parseFloat(style); 
   element.style.fontSize = (fontSize *2) + 'px';
}
let blingChecked=document.getElementById("bling-checked");
var m=0;
blingChecked.onchange=function(){
      if(blingChecked.checked==true){
        document.body.style.backgroundImage = "url('images/backImg.jpg')";
        //document.getElementsByTagName("body").style.backgroundImage = "url('images/backImg.jpg')";
        document.getElementById("comment-text").style.color="green";
        document.getElementById("comment-text").style.textDecoration="underline";
      }else{
        document.body.style.background= "none";
        document.body.style.background = '';
        document.body.style.backgroundUrl = '';
        document.body.style.backgroundColor = 'white';
        document.getElementById("comment-text").style.color="black";
        document.getElementById("comment-text").style.textDecoration="normal";
      }
    // document.getElementById("mainDoc").classList.add("background-add");
   
    
}
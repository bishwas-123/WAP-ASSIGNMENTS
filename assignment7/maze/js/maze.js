$(document).ready(function(){
<<<<<<< HEAD
    let start=0;
=======
     "use strict"
    var start=0;
    var timer=0;
>>>>>>> adad868c09f3dfbb9fc0393ec981d8162e7f502f
        $("#start").on("click",function(){
             
             $("#status").text("STARTED  .........");
            start=1;
            checkCursor();
            $("#maze").mouseleave(function(){
                checkStatus();   
          });
          $("#end").mouseover(function(){
              if(start==1){
                  $("#status").text("YOU WIN! :]");
               
                start=0;
                setTimeout(checkoutSide,2000);
              }
          })
        });
      
        function checkCursor(){
            $(".boundary").mouseenter(function(){
                if(start==1){
                    $(".boundary").css("background-color","red");
                    $("#status").text("YOU Lose!");
                    start=0;
                    setTimeout(checkoutSide,2000);
                }
                
            });
        }
      
        function checkStatus(){
            if(start==1){
                $(".boundary").css("background-color","red");
                $("#status").text("YOU Lose!");
                start=0;
                setTimeout(checkoutSide,2000);
            }
        }
function checkoutSide(){
        start=0;
        $("#status").text('Click the "S" to begin');
        $(".boundary").css("background-color","#eeeeee");

    
}

// $(document).keypress(function(e) {
            
//     if (e.keyCode == 83 || e.keyCode == 115)
//           {
//           $("#start").click();
              
//           }
// });
       

     
       


});
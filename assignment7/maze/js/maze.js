$(document).ready(function(){
     
    let start=0;
        $("#start").on("click",function(){
            $("#maze").mouseout(function(){
                start=1;
          });
            
        });
        if(start==1){
            alert();
        }


});
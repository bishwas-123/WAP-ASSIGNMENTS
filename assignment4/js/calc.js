let btnEvent=document.getElementById("btn");
function calcTip(){
    let subtotal=parseInt(document.getElementById("subtotal").value);
    let tip=parseInt(document.getElementById("tip").value);
    let total=subtotal+(subtotal*(tip/100));
    document.getElementById("total").innerHTML=total;
}
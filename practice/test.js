// var x = 5; // var is used intentionally
// function foo() {console.log(this.x);}
// foo();
// const obj = {x: 10, bar: function () {console.log(this.x);}};
// obj.bar();
// const bar2 = obj.bar;
// bar2();
// obj.foo = foo;
// obj.foo();
function calculate(f, a, b) { return f(a, b); }
var op = function(x,y){return x+y;};
var op1 = function (x,y){return x*y;};
alert(calculate(op1,3,4));
alert(calculate(op,9,6));

var myfunc = function(a, x) {
return a * x;
};
var x = myfunc(2, 3);
var y = myfunc;
//alert(x);
//alert(y(2,3));



setTimeout(donkey1(), 12000);
setTimeout(donkey2, 12000);

function donkey2(){
	alert("d1");
}

function donkey1(){
	
	return function(){
		
		alert("d2");
	}
	
}


var a = {
    greet: '',
    log: function() {
    this.greet = 'Hello';
    console.log(this.greet); // "Hello "
    var changeGreet = function(greet) {
    this.greet = greet;
    }
    changeGreet('Bonjour');
    console.log(this.greet); // "Hello"
    }
    }
    a.log();


    function eat(){
        console.log(eat.meal);
        }
        eat.meal = "pizza";
        eat();
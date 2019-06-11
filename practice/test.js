
var x = 1;
var y = 2;
var z = 3;
function foo() {
 function foo1() {
 console.log(`value of x: ${x}`);
 console.log(`value of y: ${y}`);
 console.log(`value of z: ${z}`);
 }
 var z = 4;
 foo1();
 var x = 3;
 console.log(`value of x: ${x}`);
 console.log(`value of y: ${y}`);
}
console.log(`value of y: ${y}`);
foo();
console.log(`value of x: ${x}`);
console.log(`value of z: ${z}`);

// var x = 5; // var is used intentionally
// function foo() {console.log(this.x);}
// foo();
// const obj = {x: 10, bar: function () {console.log(this.x);}};
// obj.bar();
// const bar2 = obj.bar;
// bar2();
// obj.foo = foo;
// obj.foo();


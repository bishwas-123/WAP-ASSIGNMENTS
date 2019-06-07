// var x = 5; // var is used intentionally
// function foo() {console.log(this.x);}
// foo();
// const obj = {x: 10, bar: function () {console.log(this.x);}};
// obj.bar();
// const bar2 = obj.bar;
// bar2();
// obj.foo = foo;
// obj.foo();

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
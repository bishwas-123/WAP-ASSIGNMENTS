(function(){
    "use strict"
    const createBicyclePrototye = function(){
       var speed=0;
        return{
            speed:function(){
                 return speed;
            },
            applyBrake:function(value){
                speed=speed-value;
            },
            speedup:function(value){
                speed=speed+value;
            }
        }
    }
    const createMountainBikeProtoype = function(prototype){
        var gear=0;
          prototype.setGear=function(value){
               gear=value;
          }
        return Object.create(prototype);
    }
    const start = function (){
            return {
                first:function(){
                    return Object.create(createBicyclePrototye());
                },
                second:function(){
                  return Object.create(createMountainBikeProtoype(createBicyclePrototye()));
                }
            }
          
        }
     
        const st = start();
        const first = st.first();
        first.speedup(45);
        console.log(first.speed());
        first.applyBrake(10);
        console.log(first.speed())
        
        const second = st.second();
        second.speedup(60);
        second.setGear(10);
        console.log(second.speed());

       
})();

//using class Es6
class Bicycle{
    constructor(){
        this.speed = 0
    }
    applyBrake(value){
        this.speed=this.speed-value;
    }
    getSpeed(){
        return this.speed;
    }

    speedup(value){
        this.speed += value;
    }
}
class MountainBike extends Bicycle{
    constructor(){
        super();
        this.gear = 0;
    }
    setGear(value){
        this.gear=value;
    }
    getGear(){
        return this.gear;
    }
}
const b = new Bicycle();
const m = new MountainBike();
b.speedup(12);
console.log(b.getSpeed());
//second class
m.speedup(10);
console.log(m.getSpeed());
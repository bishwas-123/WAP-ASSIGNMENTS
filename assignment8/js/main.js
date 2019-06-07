//"use strict"
var module=(function(){
    var top=function createBicyclePrototye(){
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
    };
    var bottom=function createMountainBikeProtoype(prototype){
        var gear=0;
          prototype.setGear=function(value){
               gear=value;
          }
             return Object.create(prototype);
        }
        var st=function start(){
            return {
                first:function(){
                   // return new createBicyclePrototye();
                    return Object.create(top);
                },
                second:function(){
                   // return new createMountainBikeProtoype();
                   return Object.create(bottom);
                }
            }
          
        }

        var begin=Object.create(st);
        console.log(`SPEED :${begin.first.speed()}`);
       // console.log(`SPEED UP:${begin.first.speedup(10)}`);

        // console.log();
        // var bicycle=Object.create(createBicyclePrototye);
        // var mountain=Object.create(createMountainBikeProtoype);
        // bicycle.speed=4;
        // bicycle.s
        // console.log(bicycle);
})();

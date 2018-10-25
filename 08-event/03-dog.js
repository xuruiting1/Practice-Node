#!/usr/bin/node

//const EventEmitter = require('events').EventEmitter;

function Dog(name, energy) {
    this.name=name;
    this.energy=energy;
    var _listeners={};

    
   // EventEmitter.call(this);
    
    var timer = setInterval(() => {
       if(this.energy > 0) {
         emit('bark');
         this.energy--;
       }else {
         global.clearInterval(timer);
       }
     }, 500);

    function emit(e,arg){
      _listeners[e].forEach((fn)=>{
        fn.call(this,arg);
      });
    }

 this.on=(e,fn)=>{
   if(typeof(_listeners[e])==='undefined')
   {
        _listeners[e]=[];
   }
   _listeners[e].push(fn);
 }


}
//Dog.prototype = EventEmitter.prototype;
module.exports = Dog;

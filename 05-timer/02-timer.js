#!/usr/bin/node

console.log('start..');

var count=0;
var timerId=setInterval(loop,500);

function loop(){
  console.log('I will loop forver');
  if(++count===10)
  {
    global.clearInterval(timerId);
    console.log("end");
  }



#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;

var emitter=new EventEmitter;
emitter.on('hello',()=>{
  console.log('hello event');
});

emitter.on('bye',()=>{
  console.log('bye event');
  process.exit("2");
});

global.setInterval(()=>{
  emitter.emit('hello');
},1000);

global.setTimeout(()=>{
  emitter.emit('bye');
},5000);

console.log('')

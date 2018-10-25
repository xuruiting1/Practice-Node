#!/usr/bin/node
console.log('I am child process.PID:',process.pid);

var timer=global.setInterval(()=>{
  console.log('time:',Date.now());
},1500);

global.setTimeout(()=>{
  clearInterval(timer);
  console.log("我是子进程，我要退出了");
  process.exit();
},15000);



#!/usr/bin/node


const cp = require('child_process');

console.log('I am father process. PID:', process.pid);

var cmd = cp.spawn('./02-child.js',[],{detached: true, stdio: ['ignore', 1, 2]});

//后面的参数代表一个是可以分离，另外一个是分离之后子进程的流应该去哪里
//cmd.stdout.pipe(process.stdout);

cmd.unref();

global.setTimeout(()=>{
  console.log('5 seconds passed,Father game over!');
  process.exit(0);
},5000);


//child.stdout.pipe(process.stdout);
////child.stderr.pipe(process.stderr);
//
//运行结果就是会在父进程结束之后子进程继续执行，直到结束



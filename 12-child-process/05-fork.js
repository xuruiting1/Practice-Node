#!/usr/bin/node


const cp = require('child_process');

console.log('I am father process. PID:', process.pid);
cp.fork('./02-child');

//child.stdout.pipe(process.stdout);
//child.stderr.pipe(process.stderr);


global.setTimeout(() => {
    console.log('5 seconds passed. father Game Over!');
    process.exit();
    //写和不写这句话基本的运行结果相同，子进程结束之后子进程会继续执行
}, 5000);


//运行的结果和detach基本相同，一样的效果
//child_process.fork() 方法是 child_process.spawn() 的一个特殊情况，专门用于衍生新的 Node.js 进程。 跟 child_process.spawn() 一样返回一个 ChildProcess 对象。 返回的 ChildProcess 会有一个额外的内置的通信通道，它允许消息在父进程和子进程之间来回传递。 详见 subprocess.send()。

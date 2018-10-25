#!/usr/bin/node

const cp = require('child_process');


//cp.spawnSync('./02-child.js', [], {stdio: ['ignore', 1, 2]});

//console.log('I am father process. PID:', process.pid);

console.log(cp.execFileSync('cat', ['01-exec-file.js']).toString('utf-8'));

//运行的结果是会打印出01-exec-file.js的内容

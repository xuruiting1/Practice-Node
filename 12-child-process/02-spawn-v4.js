#!/usr/bin/node


const cp = require('child_process');

console.log('I am father process. PID:', process.pid);

var cat = cp.spawn('cat', ['./a.txt']);
var sort = cp.spawn('sort');
var uniq = cp.spawn('uniq');

cat.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin);
uniq.stdout.pipe(process.stdout);
//标准输出流上面，把三个命令用管道连起来了,为了说明什么问题


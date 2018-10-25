#!/usr/bin/node

const cp = require('child_process');


console.log('I am father process. PID:', process.pid);

var cmd = cp.fork('./05-ipc-child.js');

cmd.on('message', (msg) => {
    console.log('CHILD-MSG', msg);

});

global.setTimeout(() => {
    cmd.send('I am father process. PID: ' + process.pid);

}, 3000);


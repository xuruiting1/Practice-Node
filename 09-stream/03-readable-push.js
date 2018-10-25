#!/usr/bin/node

const Readable=require('stream').Readable;

var src=new Readable();

//推送流
srs.push('hello ');
srs.push('stream!\n');
srs.push(null);

srs.pipe(process.stdout);

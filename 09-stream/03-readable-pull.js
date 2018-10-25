#!/usr/bin/node

const Readable = require('stream').Readable;

var src = new Readable();

var c = 'a'.charCodeAt(0);
src._read = () => {
   src.push(String.fromCharCode(c++));//push的发生是在流的时候发生，占内存比较小
   if(c>'z'.charCodeAt(0)) src.push(null);

};

src.pipe(process.stdout);

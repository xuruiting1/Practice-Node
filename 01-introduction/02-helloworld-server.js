#!/usr/bin/node

const http=require('http');

http.createServer((req,res)=>{
  res.end('hello world');
  console.log(req.headers);
}).listen(8080);



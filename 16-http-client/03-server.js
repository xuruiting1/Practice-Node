#!/usr/bin/node

const http=require('http');
http.createServer((req,res)=>{
  console.log(req.headers);
  req.pipe(process.stdout);
  res.end('ok!');
}).listen(8080)


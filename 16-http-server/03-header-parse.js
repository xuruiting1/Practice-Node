#!/usr/bin/node

const http=require('http');

http.createServer((req,res)=>{
  console.log(req.headers);
  console.log('host:',req.headers.host);
  console.log('use-Agent:',req.headers['user-agent']);
//请求头的解析,请求体解析在后面讲解
}).listen(8080)

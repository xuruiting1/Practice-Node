#!/usr/bin/node

const http=require('http');
const log=console.log;

//http.createServer().listen(8080);//创建web服务，监听8080端口

http.createServer((req,res)=>{
  if(req.url ==='/' && req.method ==='POST')
  {
    log(`${req.method}${req.url}HTTP/${req.httpVersion}`);
    log(req.headers);
    log();
    req.pipe(process.stdout);
    res.end('OK!!!');
  }else{
    res.statusCode=404;
    res.end('Error!');

  }
}).listen(8080)

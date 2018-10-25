#!/usr/bin/node

const http=require('http');
const fs=require('fs'),
      path=require('path'),
      util=require('util'),
      log=util.debuglog('wd');

var file;

http.createServer((req,res)=>{
  console.log(req.url);
  log(req.headers);
  log();
  file=path.join(__dirname,req.url);
  log();
  log(file);
  var read=fs.createReadStream(file);
  read.on('error',(err)=>{
    res.end(err.message);
    res.end(err.message);
    return ;

    });
    read.pipe(res);

}).listen(8080);

//异步的异常处理，分为回调异常和事件异常，这是事件异常


#!/usr/bin/node

const http = require('http'),
      url=require('url'),
      log=console.log;
const qs=require('querystring');

var addr='http://wangding:123@www.baidu.com:8080/a/b/c?name=wangding&gender=M#/d/e/f';
log('url:',addr);
log('protocal:',url.parse(addr).protocol);
log('auth:',url.parse(addr).auth);


http.createServer((req, res) => {
  log('url:',req.url);
  log('protocal:',url.parse(req.url).pathname);
  log('auth:',url.parse(req.url).query);
  res.end('ok');


}).listen(8080);



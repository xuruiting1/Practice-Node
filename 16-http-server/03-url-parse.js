#!/usr/bin/node

const http = require('http'),
      url  = require('url'),
      qs=require('querystring'),
      log  = console.log;

var addr='http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f';
log('url:',addr);
log('protocal',url.parse(addr).protocol);
log('auth:',url.parse(addr).auth);

http.createServer((req, res) => {
  console.log(url.parse(addr));
        log('HTTP request URL:', req.url);
            log('pathname',url.parse.pathname);
                log('querystring:',url.parse(addr).query);
                    log("qs parse:",url.parse(addr).query);
                        res.end('ok!');

}).listen(8080);

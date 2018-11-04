#!/usr/bin/node

//请求 一个url地址

const http = require('http');
      url=require('url');
var address = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

address=global.encodeURI(address);

const options={
  hostname:url.parse(address).hostname,
  port:url.parse(address).port,
  path:url.parse(address).pathname,
  headers:{
    'User-Agent':'01-my-curl.js'
  }
};


http.get(options,(res)=>{
  console.log(`{res.httpVersion}&{res.statusCode}&{res.statusMessage}`);

  console.log(res.headers);
  console.log();
  res.pipe(process.stdout);
});


//展示怎么拿到的这部分的数据
//请求怎么构造呢？？？

#!/usr/bin/node

//请求 一个url地址

const http = require('http');
var log=console.log;
const addr='http://www.sian.com/';




function getURL(addr){
  http.get(addr,(res)=>{
    log(`HTTP/${res.httpVersion}${res.statusCode}${res.statusMessage}`)
    log(res.headers);
  log('');

    if(res.statusCode>300 && res.statusCode<400){
      var newAddr=res.headers['loaction'];
      
      getURL(addr);
    }else{
      res.pipe(process.stdout);
    }
  });
}

getURL(addr);


//展示怎么拿到的这部分的数据
//请求怎么构造呢？？？

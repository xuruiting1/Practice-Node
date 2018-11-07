#!/usr/bin/node

const http=require('http');

//http.createServer().listen(8080);//创建web服务，监听8080端口

http.createServer((req,res)=>{
  if(req.url==='/'){
    var html=''
    +'<!DOCTYPE html>'
    +'<html>'
    +'<head>'
      +'<meta charset="UTF-8">'
      +'<title></title>'
    +'</head>'
    +'<body>'
      +'<h1>HELLO World</h1>'
    +'</body>'
    +'</html>';
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Lenght': Buffer.byteLength(html)
    });
    res.end(html);
  }else{
     res.statusCode = 404;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Resource not found!');
  }
}).listen(8080);

//如何解析就是自己安排，这是静态的页面，如果是个json数据，也可以发过去，或者是文件，视频或者是音频，hello world设置成变量就变成了动态页面。

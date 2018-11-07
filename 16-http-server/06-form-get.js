#!/usr/bin/node

const http=require('http');
const log=console.log,
      url=require('url'),
      qs=require('querystring');
var items=[];

//http.createServer().listen(8080);//创建web服务，监听8080端口

http.createServer((req,res)=>{
  if(url.parse(req.url).pathname  ==='/' && req.method ==='GET')
  {
    log(`${req.method}${req.url}HTTP/${req.httpVersion}`);
    log(req.headers);
    log();

    var data=qs.parse(url.parse(req.url).query);
    log('query string:',url.parse(req.url).query);
    log('data:',data);
    if(typeof data.item !== 'undefined'){
      items.push(data.item);
    } 
    var html = '<!DOCTYPE html>\n'
              + '<html>\n'
              + '  <head>\n'
              + '    <meta charset="UTF-8">\n'
              + '    <title>Todo list</title>\n'
              + '  </head>\n'
              + '  <body>\n'
              + '    <h1>Todo List</h1>\n'
              + '    <ul>\n'
              + items.map(function(item) {return '      <li>' + item + '</li>';}).join('\n')
              + '    </ul>\n'
              + '    <form method="get" action="/">\n'
              + '       <p><input type="text" name="item" />'
              + '       <input type="submit" value="Add Item" /></p>\n'
              + '    </form>\n'
              + '  </body>\n'
              + '</html>';
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.statusCode = 200;
  res.end(html);
  }else{
    res.statusCode=404;
    res.end('Error!');
  }
}).listen(8080)

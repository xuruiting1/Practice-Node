#!/usr/bin/node

const http=require('http');
const log=console.log,
      url=require('url'),
      qs=require('querystring');
var items=[];

//http.createServer().listen(8080);//创建web服务，监听8080端口

http.createServer((req,res)=>{
  if(url.parse(req.url).pathname  ==='/' && req.method ==='POST')
  {
    log(`${req.method}${req.url}HTTP/${req.httpVersion}`);
    log(req.headers);
    log();
  }

    if(req.url==='/'&&req.method==='GET'){
      showPage(req,res);
    }else if(req.url ==='/'&& req.method==='POST'){
      var data='';
      req.on('data',(chunk)=>{data += chunk;});
      req.on('end',()=>{
        var list=qs.parse(data);

        log('list:',list);
        if(list.item !='') items.push(list.item);
      });
      showPage(req,res);
    }else{
      res.statusCode=404;
      res.end('Error!');
    }
}).listen(8080);



function showPage(req,res) {
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
              + '    <form method="POST" action="/">\n'
              + '       <p><input type="text" name="item" />'
              + '       <input type="submit" value="Add Item" /></p>\n'
              + '    </form>\n'
              + '  </body>\n'
              + '</html>';
     
      
     
      res.statusCode = 200;
      res.end(html);

}

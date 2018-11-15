#!/usr/bin/node

/*
 * 自己写的，总是有一个错误，那就是第一次的时候多一个空白的
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
              + items.map(function(item) {return '<li>' + item + '</li>';}).join('\n')
              + '    </ul>\n'
              + '    <form method="post" action="/">\n'
              + '       <p><input type="text" name="item" />'
              + '       <input type="submit" value="Add Item" /></p>\n'
              + '    </form>\n'
              + '  </body>\n'
              + '</html>';
     
      
     
      res.statusCode = 200;
      res.end(html);

}
*/

const http = require('http'),
      qs   = require('querystring');

var items = [];

http.createServer((req, res) => {
  if(req.url != '/') {
    err(res);
    return;
              
  }
  console.log(req.headers);
  console.log('');
  switch(req.method) {
    case 'GET':
      show(res);
      break;
    case 'POST':
      add(req, res);
      break;

     default:
       err(res);
       break;                                               
      }

}).listen(8080);

function show(res) {
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
                                                                                + '    <form method="post" action="/">\n'
                                                                                + '       <p><input type="text" name="item" />'
       + '       <input type="submit" value="Add Item" /></p>\n'
       + '    </form>\n'
       + '  </body>\n'
       + '</html>';

      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Length', Buffer.byteLength(html));
      res.statusCode = 200;
      res.end(html);
}

function add(req, res) {
    var body = '';

      req.on('data', function(chunk) { body += chunk;  });
      req.on('end', function() {
            console.log(body); 
            if(body != '') {
              items.push(qs.parse(body).item);           
            }
            show(res);        
      });

}

function err(res) {
    var msg = 'Not found!';

    res.statusCode = 404;
    res.setHeader('Content-Length', msg.length);
    res.setHeader('Content-Type', 'text/plain');
    res.end(msg);

}


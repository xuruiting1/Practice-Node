#!/usr/bin/node

const http = require('http'),
      url=require('url');
var items=['吃饭','睡觉'];
http.createServer((req, res) => {
    console.log('HTTP request method:', req.method);

    switch(req.method) {
          case 'GET':
            select(req, res);
            break;
          case 'POST':
            create(req, res);
            break;

          case 'PUT':
             update(req, res);
             break;

          case 'DELETE':
             remove(req, res);
             break;

          default:
             res.end('Something Wrong!');
                                                                    
    }

}).listen(8080);

function select(req, res) {
  var msg=JSON.stringify(items);
  res.statusCode=200;
  res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Length',Buffer.byteLength(msg));

  res.end(msg);

}

function create(req, res) {
    send(res);

}

function update(req, res) {
    send(res);

}

function remove(req, res) {
  if(req.url===''){
    items=[];
  }else{
    var id=qs.parse(url.parse(req.url).query).id;
    console.log('ID:',id);
    if(id>=0&&id< items.length){
      items.splice(id,1);
      res.end('好了');
    }else{
      res.end('ERROR!');
    }
    //需要做错误处理。
  }
  //res.end('OKOKOK')

}

function send(res) {
    res.end('OK!');

}


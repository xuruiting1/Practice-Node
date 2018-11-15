#!/usr/bin/node

const http = require('http'),
      cheerio = require('cheerio');

var addr ='http://edu.51cto.com/courselist/index-zh5.html';


http.get(addr, (res) => {
  var html='';
  res.on('data',(data)=>{
    html+=data;
  });
  res.on('end',()=>{
    var $ =cheerio.load(html);
    console.log($('body').find('div.main').length);
  });
  
});


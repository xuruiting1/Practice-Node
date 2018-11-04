#!/usr/bin/node

const http = require('http'),
      cheerio = require('cheerio');
var log=console.log;

var addr ='http://edu.51cto.com/courselist/index-zh5.html';


http.get(addr, (res) => {
  var html='';
  res.on('data',(data)=>{
    html+=data;
  });
  res.on('end',()=>{
    var $ =cheerio.load(html);
    $('body').find('div.main').each(function(){
      var cName=$(this).find('a').text();
      var cTime=$(this).find('p.fl').text();
      var cTarget=$(this).find('div.course_target').text();
      var cURL=$(this).find('a').attr('href');
      if(cTime==='') return;
      log('课程名称：',cName.trim());
      log('课程名称：',cTime.trim());
      log('课程名称：',cTarget.trim());
      log('课程名称：',cURL.trim());
      log();
    })
  });
  
});


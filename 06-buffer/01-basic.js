#!/usr/bin/node

//如何对buffer进行初始化

var buf1=new Buffer(256);

buf1[0]=23;

const log=console.log;

log('buffer length:',buf1.length);

log('buffer1 content',buf1);

for(var i=0;i<256;i++) buf1[i]=i;

log('\nbuffer content:',buf1);

var buf2=buf1.slice(250,256);

log('\n buffer content:',buf2);

buf2.fill(0);

log('\n buffer content:',buf2);


var arr=['a',155,199,200,255,10];

var buf3= new Buffer(arr);
  log('\nbuffer3 content:',buf3);

var buf4=new Buffer('hello world','utf8');

log('\n buffer4 content:', buf4);


buf4.copy(buf3,0,0,buf3.length);
log('\nbuf3:',buf3.length,buf3.toString());


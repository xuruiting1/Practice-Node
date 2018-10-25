#!/usr/bin/node

const stdin =process.stdin,
      stdout=process.stdin,
      Trans=require('stream');

stdin.setEncoding('utf8');

var tf=new Trans();

tf._transform=function(){

};

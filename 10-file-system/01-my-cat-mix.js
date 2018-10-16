#!/usr/bin/node

const fs   = require('fs');
var fid = fs.openSync(file, 'r');

fs.writeSync(1, fs.readFileSync(fid).toString('utf8'));
//1代表标准输出流
//通过配置文件里面的值，控制它的行为。
fs.closeSync(fid);//底层的API


#!/usr/bin/node

console.log('file name',__filename);
console.log('dir name:',__dirname);
//没有考虑到跨平台
var fileName=__dirname+'/views/view.html';

//方案2 代码复杂，平台考虑不全面

switch(process.platform){
  case 'linux':
    fileName=__dirname + '/views/view.html';
    break;
  case 'win32':
    fileName=__dirname + '\\view.html';
    break;
  default:
    fileName='something wrong';
}

console.log('fileName',fileName);

//第三种，最佳方式

const path =require('path');
fileName=path.join(__dirname, 'views', 'login.html');

console.log('fileName',fileName);


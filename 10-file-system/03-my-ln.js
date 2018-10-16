#!/usr/bin/node

const fs=require('fs');

var src=process.argv[2];
var Ink=process.argv[3];

fs.linkSync(src,Ink);

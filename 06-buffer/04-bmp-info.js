#!/usr/bin/node

const fs=require('fs');

const filename=process.argv[2];

var buf=fs.readSync(fileName);
log('BMP file width:',buf.readUInt32LE(18));
log('BMP file height:',buf.readUInt32LE(22));
log('BMP file color deapth ',buf.readInt16IE(28));

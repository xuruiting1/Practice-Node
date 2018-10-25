#!/usr/bin/node
const log=console.log;
const fs=require('fs');

const filename=process.argv[2];

var buf=fs.readFileSync(filename);
log('BMP file width:',buf.readUInt32LE(18));
log('BMP file height:',buf.readUInt32LE(22));
log('BMP file color deapth:',buf.readUInt16LE(28));

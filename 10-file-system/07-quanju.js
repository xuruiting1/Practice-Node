#!/usr/bin/node

const fs   = require('fs');
var file = process.argv[2] || __filename;

fs.createReadStream(file).pipe(process.stdout);
process.on('uncaughtException',(err)=>{
  console.error(err.message);
  process.exit(100);
})


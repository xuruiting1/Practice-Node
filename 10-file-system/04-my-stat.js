#!/usr/bin/node

const fs  = require('fs'),
        file = process.argv[2];

console.log(fs.statSync(file));


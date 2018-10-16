#!/usr/bin/node


const fs   = require('fs'),
        uid  = process.argv[3],
        gid  = process.argv[4],
        file = process.argv[2];

fs.chownSync(file, Number(uid), Number(gid));



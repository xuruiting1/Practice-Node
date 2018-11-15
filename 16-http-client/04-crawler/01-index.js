#!/usr/bin/node

const http = require('http'),
            url  = require('url');

var addr ='http://edu.51cto.com/courselist/index-zh5.html';


http.get(addr, (res) => {
    console.log('status:', res.statusCode);
    console.log('status message:', res.statusMessage);
    console.log('HTTP version:', res.httpVersion);
    console.log('');
    console.log(res.headers);
    console.log('');
    res.pipe(process.stdout);

});


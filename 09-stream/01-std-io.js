#!/usr/bin/node

const stdin=process.stdin;
process.stdin.resume();
process.stdin.setEncoding('utf8');

stdin.on('data',(data)=>{
  process.stdout.write(data.toUpperCase());
})

//global.setTimeout(()=>{
 // stdin.removeAllListeners();
//},3000);//三秒之后清除

stdin.on('end', () => {
    stdout.exit();

});

stdin.pipe(process.stdout);

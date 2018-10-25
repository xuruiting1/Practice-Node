#!/usr/bin/node

//exec
////衍生一个 shell 并在 shell 上运行命令[外壳]

const cp = require('child_process');
var cmd = process.argv[2];

cp.exec(cmd, (err, stdout) => {
  if(err){
      console.error(err.massage);
          process.exit(100);
  }
   console.log(stdout);
});

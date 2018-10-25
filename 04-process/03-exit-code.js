#!/usr/bin/node

var code=process.argv[2];
if(process.argv.length<3)
{
  console.log('请给出命令行参数');
  process.exit(code);
}
if(typeof code!='number'){
  console.error('命令行参数类型应该是数值类型！');
  process.exit(1);
}


process.exit(code);//交互模式和非交互模式
//命令行参数

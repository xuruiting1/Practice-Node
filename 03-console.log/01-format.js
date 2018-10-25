#!/usr/bin/node

const user ={
  name:'徐瑞婷',
  age:18,
  qq:'1263183452'
};

const log=console.log;

//三位占位符

log('name:%s',user.name);

log('age:%d',user.age);
log('JSON:%j',user);

//输出方式一：占位符输出
log('qq:%s',user.qq);

log('qq:',user.qq);

//输出方式三：拼接字符串输出

log('qq: '+user.qq);

//输出方式四：模板字符串输出
log(`qq: ${user.qq}`);

console.error('Error! something');


  

#!/usr/bin/node

const mysql=require('mysql');
const con =mysql.createConnection({
  host:'localhost',
  user:'root',
      password:'ddd',
      database:'test'
});

con.connect();
//自己的代码
//查询
/*
const sql='select * from books where book_id=?';
con.query(sql,[100],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
})
*/
//插入
/*
const sql='insert into books(book_id,title, status) values(?,?,?)';
con.query(sql,[2,"西游记",'100'],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
})
*/
//改
/*
const sql='update books set title=? where book_id=?';
con.query(sql,['MySQL Programming',2],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
})
*/
//删除

const sql='delete from books where book_id=?';
con.query(sql,[2],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
})
con.end();

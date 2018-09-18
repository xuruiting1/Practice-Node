#!/usr/bin/node

console.log('first');

global.setTimeout(function(){
  console.log('second');
},1000);

console.log('third');

function Bomb()
{
  this.message='Bomb!';
}
Bomb.prototype.explode=function(){
  console.log(this);//
  console.log(this.message);
}
var b =new Bomb();


var timerID=setTimeout(b.explode.bind(b),2000);

//global.clearTimeout(timerID);//应该把:定时器放在炸弹里面

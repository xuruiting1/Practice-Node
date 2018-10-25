#!/usr/bin/node

module.exports=function circle(radius)
{
  return {
    diameter:function(){
      return 2*radius;
    },
     circumference:function(){
       return 2*Math.PI*radius;
     },
     area:function(){
       return Math.PI*radius*radius;
     }
  }
}


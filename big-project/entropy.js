#!/usr/bin/node

var arr = [],
    hp = 0,
    sum = 0;
const log=console.log;

function judge(value){
  if(isNaN(value)){log('请输入数字 ！');return false;}
  else if(value<0){log('请输入大于0的数 ！');return false;}
  else if(value>1){log('请输入小于1的数！');return false;}
  return true;
}

function sumjudge(){
    sum = 0;
    arr.forEach((key)=>{sum+=Number(key);});
    if(Number(sum.toFixed(2)) < 1){console.log('命令行参数错误：概率空间不封闭！');
    arr = [];input();return false;}
    if(Number(sum.toFixed(2)) > 1){
      log('概率和超过了 1！');arr = [];input();return false;
    }
    return true;
}


function calculate(){
    console.log('p = ',arr);
    hp = 0;
    arr.forEach((value)=>{hp += (-1)*value*Math.log2(value);});
    //Math.log2(x)
    //如果 x 为 NaN，则此函数返回 NaN。如果 x 小于零 (0)，则此函数返回 NaN
    console.log('\nH(p) = '+ hp.toFixed(3) +'bit');
    //toFixed() 方法可把 Number 四舍五入为指定小数位数的数字
}

function input(){
    var i = 0;
    log('\n请输入信源概率分布:(Ctrl+D 退出输入)');
    log();
    log('p' + i + ':');
    process.stdin.on('data',(data)=>{
      //一个指向标准输出流(stdout)的 可写的流(Writable Stream)：
      //一个指向 标准输入流(stdin) 的可读流(Readable Stream)
      arr[i] = data.slice(0,data.length-1) - 0;
      if(judge(arr[i]) === true){
        i++;
        log('p' + i + ':');
      }
    });
    process.stdin.on('end',()=>{
      if(arr.length === 0){
        process.exit(-1);
      }
      console.log('p = ',arr);
      sum = 0;
      arr.forEach((key)=>{sum+=key;});
      if(sum !== 1){
        console.log('\n概率空间不封闭，无效的信源概率分布！');
        process.exit(-1);
      }
      calculate();
});
}

function argv(){
    if(process.argv.length === 2){input();}
    else if(process.argv.length === 3){
    if(/,\s/.test(process.argv[2])){
      log('请输入数字！');input();
    }
    else{
      arr = process.argv[2].split(',');
      if(arr.length === 1){
        log('命令行参数错误：概率数据之间没有用逗号分隔!');
        arr = [];
        input();
        return;
      }
      for(var i = 0;i<arr.length;i++){
        if(judge(arr[i]-0) === false){
          arr=[];input();return;
        }
      }
      if(sumjudge() == true){
        calculate();
      }
    }
    }
    else{
      for(i = 2;i<process.argv.length;i++){
        arr[i-2] = process.argv[i];
        if(judge(arr[i-2] - 0) === false){arr=[];input();return;}
      }
          if(sumjudge() == true){calculate();}
    }
}
argv();

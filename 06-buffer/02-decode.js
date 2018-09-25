
const srt=process.argv[2];

var buf=new Buffer(str,'base64');
const info =buf.toString('utf8').split(':');

if(info.length!==2)
{
  console.log('信息有误');
  process.exit(2);
}

console.log('user name: %s\npassword: %s',info[0],info[1]);

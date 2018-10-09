#!/usr/bin/node

const Dog = require('./03-dog.js');

var taidi = new Dog('taidi', 5);
var zangao = new Dog('zangao', 10);
taidi.on('bark', onBark.bind(taidi));
zangao.on('bark', onBark.bind(zangao));

function onBark() {
    console.log('%s barked! energy: %d',this.name,this.energy);
}

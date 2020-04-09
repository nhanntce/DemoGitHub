var cat = require('./cat.js');
var mouse = require('./mouse.js');

var mickey = new mouse('Mickey');
var tom = new cat('Tom');

tom.eat(mickey);
console.log(tom);
var Chicken = require('./Chicken');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var chicken = new Chicken('Cock');
var cat = new Cat();
var mouse = new Mouse('Jerry');

cat.eat(mouse);

chicken.sayHi();
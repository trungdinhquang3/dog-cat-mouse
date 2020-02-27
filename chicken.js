var chalk = require('chalk');

function Chicken(name) {
	this.name = name;
	this.stomach = [];
}

Chicken.prototype.eat = function (cat) {
	this.stomach.push(cat);
}

Chicken.prototype.sayHi = function () {
	console.log('Hi! My name is ' + chalk.blue(this.name));
}

module.exports = Chicken;
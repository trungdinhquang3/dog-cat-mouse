var Mouse = require('./Mouse');

function Cat() {
	this.stomach = [];
	this.dead = false;
}

Cat.prototype.eat = function (animal) {
	if(animal instanceof Mouse) {
		this.stomach.push(animal);
	} else {
		throw new Error('Cat can eat only mouse!');
	}
}

module.exports = Cat;
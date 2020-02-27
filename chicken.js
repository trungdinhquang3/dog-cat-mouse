function Chicken() {
	this.stomach = [];
}

Chicken.prototype.eat = function (cat) {
	this.stomach.push(cat);
}
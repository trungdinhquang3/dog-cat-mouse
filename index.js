var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat();
var dog = new Dog('Husky');
var mouse = new Mouse('Jerry');

try {
	cat.eat(dog);
} catch(error) {
	console.log('Error while cat eating a dog');
}

console.log(cat);
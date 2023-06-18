//ques1
let parent = {
	display: function () {
		console.log('Hiiiii...............');
	},
};

let child = Object.create(parent);
child.name = function () {
	console.log('I am Child Object');
};

child.name();
child.display();

//ques2
function car(wheel, engine) {
	this.wheel = wheel;
	this.engine = engine;
}
car.prototype.start = function () {
	console.log('This care starts');
};

function swift(wheel, engine) {
	car.call(this, wheel, engine);
}

swift.prototype = Object.create(car.prototype);

swift.prototype.drive = function () {
	console.log('This car is driving');
};
const myswift = new swift(4, '1.4l');
myswift.start();
myswift.drive();
console.log(myswift);

//ques3
Array.prototype.calculateSum = function () {
	var sum = 0;
	for (var i = 0; i < this.length; i++) {
		sum += this[i];
	}
	return sum;
};

// Creating multiple arrays
var array1 = [1, 2, 3, 4, 5];
var array2 = [10, 20, 30];
var array3 = [2, 4, 6, 8, 10, 12];

// Calculating the sum using the method from the Array prototype
var sum1 = array1.calculateSum();
var sum2 = array2.calculateSum();
var sum3 = array3.calculateSum();

console.log(sum1);
console.log(sum2);
console.log(sum3);

//ques4
function getAllPropertyNames(obj) {
	var propertyNames = [];

	// Retrieve own property names
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			propertyNames.push(prop);
		}
	}

	// Retrieve inherited property names
	var prototype = Object.getPrototypeOf(obj);
	if (prototype !== null) {
		var inheritedPropertyNames = getAllPropertyNames(prototype);
		propertyNames = propertyNames.concat(inheritedPropertyNames);
	}

	return propertyNames;
}

// Example usage
var obj = {
	name: 'John',
	age: 30,
};

function Person() {
	this.gender = 'Male';
}
Person.prototype = obj;

var person = new Person();
person.city = 'New York';

var propertyNames = getAllPropertyNames(person);
console.log(propertyNames);

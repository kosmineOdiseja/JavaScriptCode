// named function with multiple parameters

function sum (a, b) {
	return a + b
}

// rework 
let sum2 = (a, b) => a + b;

// named function with single parameter

function isPostive(number) {
	return numuber >= 0
}
// rework

let isPostive2 = number => number >= 0; 

// named function with so parameters

function randomNumber() {
	return Math.random
}

// rework 

let randomNumber2 = () => Math.randomNumber;



// named function with unknown parameters
document.addEventListener('click', function() {
	console.log('click')
})

document.addEventListener('click', () => console.log('click'))


class Person {
	constructor(name) {
		this.name = name
	}


	printNameArrow() {
		setTimeout(() => {
			console.log('Arrow: ' + this.name)
		}, 100)
	}

	printNameFunction() {
		setTimeout(function() {
			console.log('Function: ' + this.name)
		}, 100)
	}
}

let person = new Person('Alius')
person.printNameArrow()
person.printNameFunction() // because this are inside function printNameFuntion()
console.log(this.name)// first print out here
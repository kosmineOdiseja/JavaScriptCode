// let myName = 'Alius'

// function printName() {
// 	console.log(myName)
// }

// printName()

// myName = 'Laura'
// printName()

function outerFunction (outerVariable) {

	const outer2 = 'Hi'
	return function innerFunction(innerVariable) {
		console.log('Outer Variable: ' + outerVariable)
		console.log('Inner Variable: ' + innerVariable)
		console.log(outer2)
	}
}

const newFunction = outerFunction('sideOut')
newFunction('side')

// what I need to know about the closure: 
	// Its that you have a function defined inside of another function then inner function has access 
	// to the variables and scope of the outer function even if the outer function finihes executing and those variables are no longer accessible 
	// outside that function 





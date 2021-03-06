const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

// the idea of destructuring is to take an array or an object and convert it to smaller elements or objects..

// not effective way to do:
	//  const  a = alphabet[0]
	//  const b = alphabet[1]

	// const[a, b]= alphabet
	//const [a,, c] = alphabet
	const[a,, c, ...rest] = alphabet

	 
	console.log(a)
	//console.log(b) dėl b meta klaidą, jei neužkomentuojam. 
	console.log(c)
	console.log(rest)

	// other powerful thing. We can compare two arrays together. 
	// const newArray = alphabet.concat(numbers) the same, but problem with objects
	 const newArray = [...alphabet, ...numbers]
	console.log(newArray)

	function sumAndMultiply(a,b) {
		return [a+b, a*b]

	}
	const array = sumAndMultiply(2, 3)
	console.log(array)

	const [sum, multiply] = sumAndMultiply(2, 3)

	// other example 

	function sumAndMultiply(a, b) {
		return[a+b, a*b] // add or remove a/b
	}	

	const [sum1, multiply1] = sumAndMultiply(2, 3) // add or remove third property division = ' no division '	

	//console.log(division)  colsole show: no division 

	const personOne = {
		name: 'Alius',
		age: 34,
		address: {
			city: 'Kaunas',
			street: 'naujoji g.'
		}
	}

	const personTwo = {
		name: 'Jonas', 
		age: 30,
		address: {
			city: 'Vilnius', 
			street: 'Geguzio g.'
		}

	}

	const { name: firstName, age } = personTwo
	console.log(firstName) // or other way console.log(name)
	console.log(age)
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
console.log(1 == 1) // true
console.log(1 === 1) // true

console.log(1 == '1') // true  but string !equal to number 
// that's happening because double equals sings takes the tape of the object
console.log( 1 === '1') // false 

console.log (0 == '') // true :() reality 0 != '' empty string

console.log(1 === '')

console.log(0 == false) // still true 

console.log(0 === false) // false

// one case when to use == 


console.log(null == null )// true
console.log(null === null) // true 


// but sometimes 

console.log(null == undefined) // true this only case when to use 
console.log(null === undefined) // false

// the same when we using != and !== 
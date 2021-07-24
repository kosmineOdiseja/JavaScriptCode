// there is two scopes: global and local 
// scopes means where we can use our variables to our code. 
var number = 10
function calc() {
	return number
}
console.log(calc())

function calcLocal(){
	var number = 12
	return numbera
}
console.log(calcLocal())
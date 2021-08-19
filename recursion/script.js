// Programmin technique when procedure, subroutine, function or algorithm that calls itself
// in step having a termination condition

function countDownRecursive(number) {
	if (number <= 0) {
		console.log('yay')
		return
	} else {
		console.log(number)
		countDownRecursive(number - 1)
	}
}
countDownRecursive(3)

// more practical recursion example
function sumRange(number) {
	let total = 0
	for (let i = number; i > 0; i--) {
		total += i
	} 
	return total
}

function sumRangeRecursive(number, total = 0) {
	if (number <= 0 )  {
		return total
	} 
		return sumRangeRecursive( number - 1, total + number )
	
}
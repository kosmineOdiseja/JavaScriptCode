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
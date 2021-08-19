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

function printChildren(t) {
	// ??? 

}

function printChildrenRecursive(t) {
	if (t.children.length === 0) {
		return
	}
	t.children.forEach(child => {
		console.log(child.name)
		printChildrenRecursive(child)
	})
}

const tree = {
	name: 'Jonas', 
	children: [
		{
			name: 'Jim', 
			children: []
		}, 
		{
			name: 'Zoe', 
			children: [
				{ name: 'Kyle', children: [] },  
				{ name: 'Sophia', children: [] }
			]
		}
	]
}
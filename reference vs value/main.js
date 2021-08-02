let a = 10
let b = "hi"
// let c = a
// c = c + 1
let c = [1, 2]
let d = c 
d.push(3)


console.log(`a= ${a}`)
console.log(`a = ${b}`)	
console.log(`c = ${c}`)	
console.log(`d = ${d}`)	


let e = [1, 2] // 0x01 čia lygitna ne array value bet linkus į atmintį
let f = [1, 2] // 0x02

console.log(`e === f ${e == f}`)
console.log(`e === f ${e === f}`)

let l = [1, 2]// 0x01
console.log(`l = ${l}`)
add(l, 3)
console.log(`l = ${l}`)


function add(array, element) { // (0x01, 3)
	array.push(element)
}


//conclusion  primitive values: nubmers, boolean, strings, undefine, null those all passed by value
// arrays, object, classes passed by reference and can be modified
// and when we use const we can't change in primitive type but we can change what we store in memory

const ab = [1, 2]
ab.push(3)
console.log(ab)
// const grandparent = document.getElementById("grandparent-id")
//const grandparent = document.querySelector(".grandparent")
const childOne = document.querySelector("#child-one")
const parent = childOne.parentElement
const grandparent = parent.parentElement
// const parents = Array.from(grandparent.children) 
// const parentsOne = parents[0]
// const children = grandparent.querySelectorAll(".child")
// 	children.forEach(changeColor)
//changeColor(children)

changeColor(grandparent)
// const children = parentOne.children


//parents.forEach(children[0])
// chnst grandparent = document.querySelector(".grandparent")

// const parent = document.querySelector('parent')
// const parents = Array.from(document.getElementsByClassName("parent"))

// changeColor(parent)
// parents.forEach(changeColor)
// more infor about query selectors: https://www.youtube.com/watch?v=l1mER1bV0N0&ab_channel=WebDevSimplified
// grandparent.style.backgroundColor = "#333";
// changeColor(grandparent)
function changeColor(element){
	element.style.backgroundColor = '#888'
}
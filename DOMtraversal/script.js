// const grandparent = document.getElementById("grandparent-id")
const grandparent = document.querySelector(".grandparent")
const parents = Array.from(grandparent.children) 
const parentOne = parents[1]
	
const children = parentOne.children


changeColor(children[1])
//parents.forEach(children[0])
// chnst grandparent = document.querySelector(".grandparent")

// const parent = document.querySelector('parent')
// const parents = Array.from(document.getElementsByClassName("parent"))

// changeColor(parent)
// parents.forEach(changeColor)
// more infor about query selectors: https://www.youtube.com/watch?v=l1mER1bV0N0&ab_channel=WebDevSimplified
// grandparent.style.backgroundColor = "#333";
changeColor(grandparent)
function changeColor(element){
	element.style.backgroundColor = '#888'
}
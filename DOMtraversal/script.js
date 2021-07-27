// const grandparent = document.getElementById("grandparent-id")
// const grandparent = document.querySelector("#grandparent-id")
//const grandparent = document.querySelector(".grandparent")

const parents = document.querySelectorAll(".parent")
// const parents = Array.from(document.getElementsByClassName("parent"))
parents.forEach(changeColor)
//changeColor(parent)
// parents.forEach(changeColor)
// more infor about query selectors: https://www.youtube.com/watch?v=l1mER1bV0N0&ab_channel=WebDevSimplified
// grandparent.style.backgroundColor = "#333";

function changeColor(element){
	element.style.backgroundColor = '#888'
}
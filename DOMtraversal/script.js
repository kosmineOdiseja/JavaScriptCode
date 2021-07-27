const grandparent = document.getElementById("grandparent-id")


const parents = Array.from(document.getElementsByClassName("parent"))


parents.forEach(changeColor)

grandparent.style.backgroundColor = "#333";

function changeColor(element){
	element.style.backgroundColor = '#888'
}
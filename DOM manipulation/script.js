// const body = document.body
// body.append("Hello World", "Bye")



// const div = document.createElement("div")
// div.innerText = 'Labas, Alius'
// div.textContent = 'Hello World'  // here is two ways to create text in div element
// what is the difference to create betweet those two`
// body.append(div)

// body.appendChild(div) // We can use appendChild - nes tai yra HTML node, bet geriau naudoti append.

// const div = document.querySelector("div")

// console.log(div.textContent) 
// console.log(div.innerText)


// new section 
// const body = document.body
// const div = document.createElement('div')
// const strong = document.createElement("strong")
// strong.innerText = "Hello World 2"
// div.append(strong)

// body.append(div)

//new section 

const body = document.body
const div = document.querySelector('div')
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

spanBye.remove() // completely removes from HTML document
// div.removechild(spanHi)
// after remove we can add it again 
div.append(spanBye)

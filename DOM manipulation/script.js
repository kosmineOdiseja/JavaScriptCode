// const body = document.body
// body.append("Hello World", "Bye")



// const div = document.createElement("div")
// div.innerText = 'Labas, Alius'
// div.textContent = 'Hello World'  // here is two ways to create text in div element
// what is the difference to create betweet those two`
// body.append(div)

// body.appendChild(div) // We can use appendChild - nes tai yra HTML node, bet geriau naudoti append.

const div = document.querySelector("div")

console.log(div.textContent)
console.log(div.innerText)

//consoleje application section local storage session storage cookies storage
localStorage.setItem('name', 'Alius')
console.log(localStorage.getItem('name'))

localStorage.removeItem("name")

sessionStorage.setItem('name', 'John')
sessionStorage.setItem('name', 'Jonas')
// console.log(sessionStorage.getItem('name'))
//sessionStorage.removeItem('name')


document.cookie = 'name=Alius; expires=' + new Date(2023, 0, 1)
document.cookie = 'name=Alius; expires=' + new Date(9999, 0, 1) // when we want to never expire

document.cookie = 'lastName=Bosas; expires=' + new Date(2023, 0, 1) // adding new cookies
// Looks like we overiding but we creating new cookie.
console.log(document.cookie)
// when we need use some cookies please use some small libraries
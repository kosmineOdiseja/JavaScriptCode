// import User from '/user.js'

// const user = new User('Alius', 11)
// console.log(user)


import U, {printName as printUserName, printAge} from '/user.js'

const user = new U('Alius', 11)
console.log(user)

printUserName(user)
printAge(user)
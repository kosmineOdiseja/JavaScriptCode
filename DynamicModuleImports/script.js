// import User, { printUser } from "./user.js"

// const user = new User("Alius", "Bosas")

// printUser(user)

import('./user.js').then(({default: User, printUser }) => {

	const user = new User("Alius")
	print(user)
})

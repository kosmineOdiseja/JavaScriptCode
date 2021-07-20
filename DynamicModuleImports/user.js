module.export default class User{
	constructor(first, last){
		this.first = first
		this.last = last 
	}
}

export function printUser(user){
	console.log('${user.first} ${user.last}')
}



// https://www.youtube.com/watch?v=ddVm53j80vc&ab_channel=WebDevSimplified
//  klaidos paaiskinimas: https://stackoverflow.com/questions/38296667/getting-unexpected-token-export
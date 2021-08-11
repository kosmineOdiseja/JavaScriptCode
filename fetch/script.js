fetch('https://reqres.in/api/user')
.then(res => {
	if (res.ok){
		console.log('SUCCESS')
	} else {
		console.log("Not Successful")
	}
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))

fetch('https://reqres.in/api/users', {
	method: 'POST', 
	headers: {
		'Content-type': 'application/json'
	}, 
	body: JSON.stringify({
		name: 'User 1'
	})	
}).then(res => {
	return res.JSON()
})
.then(data => console.logI(data))
.catch(error => console.log('ERROR'))

function makeRequest(location) {
		return new Promise((resolve, rejec) => {
		console.log(`Making Request to ${location}`)
		if (location === 'Google'){
			resolve('Google says hi')
		} else {
			reject('we can only talk to Google')
		}
	})
}


function processRequest(response) {
	return new Promise((resolve, reject) =>{
		console.log('Processing responce')
		resolve(`Extra Information + ${response}`)
	})
}

makeRequest('Google').then(response => {
	console.log('Responce Received')
	return processRequest(response)
}).then(processRequest => {
	console.log(err)	
}).then(processedResponse => {
	console.log(processRequest)
}).catch (err => {
	console.log(err)
})


//  async function doWork(){
// 	const responce = await makeRequest('Google')
// 	console.log('Responce Received')
// 	const processedResponse = await processRequest(response)
// 	console.log(processedResponse)
// }

async function doWork(){
	try { 
		const responce = await makeRequest('Google')
		console.log('Responce Received')
		const processedResponse = await processRequest(response)
		console.log(processedResponse)
	} catch (err) {
		console.log(err)
	}
}
doWork()
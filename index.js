const express = require('express');
const app = express();
const myArray = [];
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/charlist', function(request, response) {
	response.send(JSON.stringify(myArray));
});
app.post('/setchar', function(request, response) {
	const json_decode = JSON.parse(request.body)
	const theyExist = false
	myArray.forEach((v, i, array) => {
		if (v.userid == json_decode.userid) {
			theyExist = true
			myArray.splice(i, 1);
			myArray.push(request.body);
		}
	});
	if (theyExist == false) {
		myArray.push(request.body);
	}
	response.send(JSON.stringify(myArray));
});
app.listen(process.env.PORT,function(){
	console.log("App listening on port process.env.PORT");
});

const express = require('express');
const app = express();
var myJson = {
    key: "myvalue"
};
var myJson2 = {
    key: "myvalue"
};
var myJson3 = {
    key: "myvalue"
};
var myJson4 = {
    key: "myvalue"
};
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/charlist', function(request, response) {
	response.send(myJson);
});
app.post('/setchar', function(request, response) {
	myJson = request.body;
	response.send(myJson);
});
app.listen(process.env.PORT,function(){
	console.log("App listening on port process.env.PORT");
});

var express = require("express");
var app = express();

app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');

app.get('/', function(request, response){
	response.render("default", {
		title : 'Home',
		classname : 'Home',
		users : ['vishal', 'nitin', 'sonali', 'shreya', 'neha', 'rajeev', 'aman']
	});
});

app.get('/about', function(request, response){
	response.render("default", {
		title : 'About Us',
		classname : 'about'

	});
});

app.get('/me', function(request, response){
	response.send("<b>Github Username : </b> raaz096");
});

app.get('/who/:name?', function(request, response){
	var name = request.params.name;
	response.send(name + " Was here");
});

app.get('/who/:name?/:title?', function(request, response){
	var name = request.params.name;
	var title = request.params.title;
	response.send("<p>name: " + name + "<br>title: " + title);
});


app.get('*', function(request, response){
	//var name = request.params.name;
	response.send(" Bad Route.");
});


var server = app.listen(3000, function(){
console.log("listening on port 3000");
});
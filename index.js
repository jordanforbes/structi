var express = require('express');

var app = express()
var pub = __dirname

app.use(express.static(pub))


app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

app.get('/', function(req, res){
	res.render('index')
})

app.use(function(err, req, res, next){
	res.send(err.stack);
})

if (!module.parent){
	var port = process.env.PORT || 9000;
	app.listen(port)
	console.log('Express started on port 9000')
}
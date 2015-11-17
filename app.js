var express = require('express');
var port = 80;
var app = express();
app.use(express.bodyParser());
app.get('/', function(req, res){	
 res.status(200);
 res.end("hello world\n");
});
app.listen(port,function(){
	console.log('Listening on port ' + port);
});

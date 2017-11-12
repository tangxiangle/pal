var express = require("express");
var path = require('path');
var app  = express();

app.get('/',function  (req,res) {
	res.send('Hello World');
})

app.get('/goods',function  (req,res) {
	res.send('Hello goods');
})

app.use(express.static(path.join(__dirname, 'dist')))
/*app.use(express.static('public'));*/
//__dirname   当前文件路径（绝对地址）
app.get('/index', function (req,res) {
	res.sendFile(__dirname+'/index.html');   //http://127.0.0.1:8081/index
})
var server = app.listen(8081,function(){
	var host=server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})


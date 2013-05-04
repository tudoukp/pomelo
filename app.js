var express=require("express"),
	app=express(),
	server=require("http").createServer(app),
	io=require("socket.io").listen(server);


require('./manager.js')(io);


app.get("/",function(req,res){
	res.sendfile(__dirname+"/index.html");
})



server.listen(80);

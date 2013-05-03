var express=require("express"),
	app=express(),
	server=require("http").createServer(app),
	io=require("socket.io").listen(server);


var channelService=require("./channelService.js")();


var world=channelService.getChannel("word",true);



io.configure(function(){
	io.set("authorization",function(handshakeData, callback){
		callback(null,true);
	})
})


io.on("connection",function(socket){

})
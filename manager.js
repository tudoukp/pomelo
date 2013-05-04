var hall=require('./hall.js'),
	room=require('./room.js');

var h=hall();

var Manager=function(io){

	console.log(1);

	io.configure(function(){
		io.set('authorization',function(handshakeData, callback){

			var user={};

			user.uid=Math.round(Math.random()*100);


			//console.log(handshakeData);

			handshakeData.user=user;
			callback(null,true);
		})
	})


	io.on("connection",function(socket){
		socket.user=socket.handshake.user;

		//console.log("\n");
		console.log(socket.user);

		h.addUser(socket,function(err){
			console.log(err);
		});

		h.getChannel().pushMessage("chat","nimi");
		
	})
}

module.exports=function(io){
	return new Manager(io);
}
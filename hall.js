var channelService=require("./channelService.js"),
	uuid=require("./util/uuid.js"),
	room=require('./room.js');


module.exports=function(){
	return new Hall();
}


var rooms={};

var Hall=function(){
	this.init();
	this.channelSer=channelService();
}

Hall.prototype={

	init:function(){
		this.channelId=uuid();
	},createRoom:function(){
		var id=generateId();
		rooms[id]=room(id);
	},addUser:function(socket,callback){
		var c=this.channelSer.getChannel(this.channelId,true);
		if(c){
			c.add(socket.user.uid,socket);
		}else{
			callback("ss");
		}
	},leave:function(user,callback){
		var c=this.channelSer.getChannel(this.channelId);
		if(c){
			c.remove(user.uid);
			callback();
		}else{
			callback("err");
		}
	},getChannel:function(){
		return this.channelSer.getChannel(this.channelId);
	}
}

function generateId(){
	var i=1;
	while(true){
		if(!rooms[i]){
			return i;
		}
		i++;
	}
}
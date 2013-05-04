var channel=require("./channel.js");

var channels={};

var ChannelService=function(){
	
}

ChannelService.prototype.getChannel=function(name){
	//boolean flag=arguments[1]?arguments[1]:false;
	var c=channels[name];

	//console.log(c+"11")
	if(c){
		return c;
	}else{
		if(arguments[1]){
			c=channel();
			channels[name]=c;
			return c;
		}else{
			return null;
		}
	}

}

ChannelService.prototype.removeChannel=function(name){
	channels.remove(name);
}


var ch;

module.exports=function(){
	if(!ch){
		ch=new ChannelService();
		return ch;
	}else{
		return ch;
	}
}
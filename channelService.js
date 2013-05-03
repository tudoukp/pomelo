var channel=require("channel.js");

var channels={};

var ChannelService=function(){
	
}

ChannelService.prototype.getChannel(name){
	boolean flag=arguments[1]?arguments[1]:false;
	var c=channels[name];
	if(c){
		return c;
	}else{
		if(flag){
			c=channel();
		}else{
			return null;
		}
	}

}

ChannelService.prototype.removeChannel(name){
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
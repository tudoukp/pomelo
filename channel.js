var events=require("events");


module.exports=function(){
	return new Channel();
}

var Channel=function(){
	events.EventEmitter.call(this);
	this.member={};   //{socket:socket,uid:uid}
}

Channel.prototype={
	pushMessage:function(route,msg){
		for(var i in this.member){
			this.member[i].emit(route,msg);
		}
	},add:function(uid,socket){
		this.member[uid]=socket;
	},remove:function(uid){
		var m=this.member;
		m.remove(m[uid]);
		this.emit("change",this.size());
	},size:function(){
		var i=0;
		for(i in this.member){
			i++;
		}
		return i;
	}
}
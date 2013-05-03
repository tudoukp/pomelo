module.exports=function(){
	return new Channel();
}

var Channel=function(){
	this.member={};   //{socket:socket,uid:uid}
	console.log(1);
}

Channel.prototype={
	emit:function(route,msg){
		for(var i in this.member){
			this.member[i].user.client.emit(route,msg);
		}
	},add:function(uid,user){
		this.member[uid]=socket;
	},remove:function(uid){
		var m=this.member;
		m.remove(m[uid]);
	}
}
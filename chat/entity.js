

exports.entity=function(){
	this.list=[];
}

entity.prototype={
	send:function(msg){
		this.list.forEach(function(socket){
			socket.emit("chat",msg);
		})
	},add:function(socket){
		//为聊天实体添加成员
		this.list.push(socket);
	},size:function(){
		//查看该实体中的成员数量
		return this.list.length;
	},remove:function(socket){
		if(this.list.indexOf(socket)){
			this.list.remove(socket);
		}
	}
}
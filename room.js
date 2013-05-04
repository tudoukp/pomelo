var channelService=require("./channelService.js");


var Room=function(id){
	this.id=id;

	this.currentPeople=0;   //当前房间人数

	this.limit=2;


	this.password;

	this.channelService=channelService();


	this.init();
}

Room.prototype={
	init:function(){
		this.member=generateId();  //主角
		//this.observer=generateId();  // 观察者
	},remove:function(){
		//this.channelService;
	},leave:function(uid){
		this.channelService.getChannel(member)
	},add:function(user,callback){
		if(this.currentPeople>=this.limit){
			callback("房间已满!");
			return;
		}

		if(this.password && arguments[1]){
			if(this.password != arguments[1]){
				callback("密码错误！");
				return;
			}
		}else{
			callback("请输入密码");
			return;
		}



		this.channelService.getChannel(member).add(user.uid,user);
	}


}

var generateId = function() {
    var id = '';
    var chars = 'abcdefghijklmnopqrstuvwxyz'+
                'ABCDEFGHIJKLMNOPQRSTUVWXYZ'+
                '0123456789-_';
    for (i=0; i<10; i++) {
        var index = Math.floor(Math.random() * chars.length)
        id += chars[index];
    }
    return id;
};


module.exports=function(id){
	return new Room(id);
}
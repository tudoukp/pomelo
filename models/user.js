var users={'1':{username:'nimei',uid:11},'2':{}};

var User=function(){
}


User.prototype.get=function(uid){
	return users[uid];
}
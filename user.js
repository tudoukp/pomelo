var User=function(client){
	this.uid;
	this.client=client;
	this.username;
}

module.exports=function(client){
	return new User(client);
}
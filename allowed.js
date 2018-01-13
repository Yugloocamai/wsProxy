// List of allowed server ip
// If empty, will be able to redirect everywhere
// Be aware: can be used for DDOS or forge evil request on other host

var args    = require('optimist').argv;

var allowed = [
	//"83.xxx.x.1:6900",
	//"83.xxx.x.1:5121",
	//"83.xxx.x.1:6121"
]
// Parse allowed ip:port option into array
if(args.a || args.allow) {
	allowed = (args.a || args.allow).split(',');
}

module.exports = allowed;
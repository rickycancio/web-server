module.exports = function (){
	return middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log(new Date().toString() + ' Request: ' + req.method + ' ' + req.originalUrl);
		next();
	}
};
}
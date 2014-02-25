module.exports = _.extend({
	login: function(obj, callback){
		if (obj.username == "joe" && obj.password == "whatever"){
			callback();
			this.trigger("login");
		} else {
			callback("invalid credentials")
		}
	},
	getPlayers: function(obj, callback) {
		//todo call using network

		callback(null, players);
	}
}, Backbone.Events);
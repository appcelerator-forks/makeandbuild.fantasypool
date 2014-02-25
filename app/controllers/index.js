function doClick(e) {
    alert($.label.text);
}
var webservice = require("webservice");
webservice.on("login", function() {
	console.log("logged in delivered");
})
$.signin.addEventListener('click', function() {
	webservice.login({
		username: $.username.value,
		password: $.password.value
	}, function(err){
		if (err){
			alert(err);
		} else {
			console.log('logged in callback');
			Alloy.createController("players").getView().open();
		}
	});
});

$.index.open();

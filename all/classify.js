(function($) {

	window.DIQA = window.DIQA || {};
		
	window.DIQA.classifyUser = function(callback, callbackOnFail) {
		if (mw.config.get("wgUserRegistration") == null) {
			callback("D");
			return;
		}
		var scriptPath = mw.config.get("wgScriptPath");
		var username = mw.config.get("wgUserName");
		var daysRegistered = Math.floor((Date.now() - mw.config.get("wgUserRegistration")) / (1000 * 3600 * 24));
		$.ajax({
            method: "GET",
            url: scriptPath + "/api.php?action=query&meta=userinfo&uiprop=editcount|latestcontrib&format=json"
        }).done(function(response) {
        	var latestContrib = response.query.userinfo.latestcontrib;
        	var year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date(latestContrib));
        	var editCount = response.query.userinfo.editcount;
        	if (editCount > 200 && editCount <= 1000 
        			&& daysRegistered >= 60 
        			&& (year == 2019 || year == 2020)) {
        		callback("A");
        	} else if (editCount >= 20 && editCount <= 200) {
        		callback("B");
        	} else {
        		callback("C");
        	}
        	
        }).fail(function() {
        	callbackOnFail();
        });
	};
	
})(jQuery);

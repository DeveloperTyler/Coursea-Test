(function (global){
	// Setup a namespace for utility 
	var ajaxUtils = {}

	// Returns an HTTP request object
	function getRequestObject() {
		if (window.XMLHttpRequest){
			return (new XMLHttpRequest());
		}
		else{
			global.alert("Ajax is not supported!")
			return(null);
		}
	}

	ajaxUtils.sendGetRequest = 
		function(requestUrl, responseHandler, isJsonResponse){
			var request = getRequestObject();
			request.onreadystatechange = //runs function when response is recieved. 
				function(){
					handleResponse(request, responseHandler, isJsonResponse);
				};
			request.open("GET", requestUrl, true);
			request.send(null)//for POST only
		};
	function handleResponse(request, responseHandler, isJsonResponse){
		if((request.readyState == 4) &&
			(request.status == 200)){


			//Default to isJsonResponse = true
			if (isJsonResponse == undefined){
				isJsonResponse = true;
			}

			if (isJsonResponse){
				responseHandler(JSON.parse(request.responseText))
			}
			else{
				responseHandler(request.responseText);
			}

			
		}
	}

	//Expose utility to the global object 
	global.$ajaxUtils = ajaxUtils;

})(window);
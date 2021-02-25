//Lecture 54: Event hadling
document.addEventListener("DOMContentLoaded",
	function (event){




		//Lecure 58 
		document.querySelector("button")
			.addEventListener("click", function(){
				$ajaxUtils
					.sendGetRequest("data/name.json",
						//responseHandler called in ajax utils
						function(res){
							var message =
								res.first + " " + res.last
							if (res.likesPizza) {
								message += " likes pizza";
							}
							else {
								message += " does not like pizza";
							}
							message += " and uses ";
							message += res.numberOfDisplays;
							message += " for teaching. ";

							document.querySelector("#content")
								.innerHTML ="<h2>" + message + "</h2>";
						})
					});
					
		// document.querySelector("button")
		// 	.addEventListener("click", function(){
		// 		$ajaxUtils
		// 			.sendGetRequest("data/name.txt",
		// 				//responseHandler called in ajax utils
		// 				function(request){
		// 					var name = request.responseText; //returns response as a string
		// 					document.querySelector("#content")
		// 						.innerHTML = "<h2>Hello " + self.name + "!";
		// 				})
					

	//});
		///DOM Manipulation 
		//console.log(document.getElementById("title"));
		//LECTURE 53 part 2  & Lecture 55
	// 	// function sayHello(event){
	// 		console.log(event);
	// 		this.textContent = "Said it";
	// 		var name =
	// 			document
	// 				.getElementById("name").value;
			
	// 		var	message = "<h2>Hello " + name +"</h2>";

	// 		// document
	// 		// 	.getElementById("content")
	// 		// 	.textContent = message;
	// 		document
	// 			.getElementById("content")
	// 			.innerHTML = message;
			
	// 		if (name === "student"){
	// 			var title = 
	// 				document
	// 					.querySelector("#title")
	// 					.textContent;
	// 			title +=" & Lovin it!"
	// 				document
	// 					.querySelector("#title")
	// 					.textContent = title;
	// 			}
	// 		}


	// 	// Unobstrusive event binding Lecture 54
	// 	document.querySelector("button")
	// 		.addEventListener("click", sayHello);

	// 	// Mouse event 
	// 		document.querySelector("body")
	// 			.addEventListener("mousemove",
	// 				function(event){
	// 					if (event.shiftKey === true){
	// 						console.log("x: " + event.clientX);
	// 						console.log("y: " + event.clientY);
	// 					}
						
	// 				}
	// 			);

	// 	// document.querySelector("button")
	// 	// 	.onclick = sayHello;
	}
);




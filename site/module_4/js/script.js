
//var message ="im a message";
//console.log("global:message="+message);

//var a = function(){
	//var message ="im a message a";
	//console.log("a:message="+message);
	//b();
//}

//function b (){
	//console.log("b:message"+message);
//}

//a();

/// Examples of javascript Types - Primative and Object. 
	// var x;
	// console.log(x);

	// if (x == undefined){
	// 	console.log("x is undefined")
	// }

	// x = 5 
	// if (x == undefined){
	// 	console.log("x is undefined")
	// }
	// else{
	// 	console.log("x has been defined")
	// }

///Common Language Constructs 
//String Concactnate 
	// var string = "Hello"
	// //string+=" world"
	// string = string + " world"
	// console.log(string + "!")

// Math
	// console.log((5+4)/3);
	// console.log(undefined/5);
	// function test1 (a){
	// 	console.log(a/5)
	// }
	// test1();

// Type equality - javascript auto makes one value equal the other denoted by "=="
	//var x = 4, y = 4;
	// if (x==y){
	// 	console.log ("x=4 is equal to y=4");
	// }
	 //var x ="4";
	// if (x == y){
	// 	console.log("x='4' is equal to y=4")
	// }

//Strict Equalty  denoted by the "===" 

	// if ( x === y){
	// 	console.log("Strict: x='4' is equal to y=4")
	// }
	// else
	// {
	// 	console.log("Strict: x='4' is NOT equal to y=4")
	// }
// if statment fall false
	// if (false || null || 
	// 	undefined || "" || 0 || NaN){
	// 	console.log("This line won't ever execute")
	// }
	// else {
	// 	console.log("All False");
	// }
	// if statment (all true)
	// if (true && "Hello" && 1 && -1 && "false"){
	// 	console.log ("All True")
	// }

//Best practices for code setup 
//Curly brace should be on same line. 
	// function a()
	// {
	// 	return
	// 	{
	// 		name: "Tyler"
	// 	};
	// }
	// function b(){
	// 	return{
	// 		name:"Tyler"
	// 	}
	// }
	// console.log(a());
	// console.log(b());	
// for loop
//i++ is the incriment operator = i=i+1 similar to i--
	// var sum	= 0
	// for ( var i  = 0; i < 10; i++){
	// 	console.log(i);
	// 	sum	= sum + 1;
	// }
	// console.log("sum of 0 through 9 is:" + sum);
//*Find notes that explain what you can call variables inside a function
// Creating Default Values
// function orderChickenwith(sideDish){
	// if (sideDish === undefined){
	// 	sideDish = "Whatever!";
	// 	}
	//  when sideish is false it will check the next thing for a true value. it will stop when it hits the first true value. 
	// 	sideDish = sideDish || "whatever!"

	// 	console.log("Chicken with "+sideDish)
	// 	}
	// 	orderChickenwith("noodles");
	// 	orderChickenwith();






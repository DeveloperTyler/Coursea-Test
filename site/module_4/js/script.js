
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

//Object 
	// var company = new Object();
	// company.name = "Tylers Website";
	// company.ceo = new Object();
	// company.ceo.firstName = "Mark";
	// company.ceo.favColor = "Blue";


	// console.log(company);
	// console.log("company ceo name is " + company.ceo.firstName);
	// console.log(company["name"]);
	// var stockPropname = "stock of company";
	// company[stockPropname] = 110;

	// console.log("Stock price is "+ company[stockPropname]);
// Object version #2 object literal 

	// var facebook = {
	// 	name: "facebook",
	// 	ceo: {
	// 		firstName: "Mark",
	// 		favColor: "Blue"
	// 	},
	// 	"Stock of Company": 110
	// };

	// console.log(facebook.ceo.firstName);

//Functions 
//
	// function multiply (x,y){
	// 	return x * y;
	// }
	// console.log(multiply(5,4));
	// multiply.version = "v.1.0.0"
	// console.log(multiply)
	// console.log(multiply.version);

	// Function Factory
		// function makeMultiper(multiplier, x){
		// 	console.log(multiplier); //the first parameter is set as 3 from multiplyBy3 setup
		// 	var myFunc = function(x){
		// 		console.log("this is "+x);
		// 		return multiplier * x;
		// 	};
		// 	return myFunc
		// }

		// var multiplyBy3 = makeMultiper(3);
		// console.log(multiplyBy3(10));
		// console.log(multiplyBy3(10));


	//Passing functions as arguments 
		// function doOperations(x, operation){
		// 	console.log(operation)
		// 	return operation(x);
		// };

		// var result = doOperations(5, multiplyBy3);// the second parameter is referencing a previous defind function. 
		// this is why in the return section of the doOperations function you can call operation(x). This is because operation is a function
		// and the function is multiply by 3
		// console.log(result);
//Copying by by value vs referce
	// var a = 7;
	// var b = a;
	// console.log("a: "+ a);
	// console.log("b: "+ b);

	// b = 5;
	// console.log("after b update:");
	// console.log("a: "+ a);
	// console.log("b: "+ b);

	// var a = {x:7};
	// var b = a;
	// console.log(a);
	// console.log(b);

	// b.x=5
	// console.log("after b.x update");
	// console.log(a);
	// console.log(b);
//Passing value by reference  
	// 
	// function changePrimitive(primVaule){
	// 	console.log("in changePrimitive....");
	// 	console.log("before:");
	// 	console.log(primVaule);

	// 	primVaule = 5;
	// 	console.log("after:")
	// 	console.log(primVaule);
	// }

	// var value = 7;
	// changePrimitive(value); //primvalue = value
	// console.log("After changePrimitive, orginal Value:")
	// console.log(value);

	// function changeObject(objValue){
	// 	console.log("in changeObject....");
	// 	console.log("before:");
	// 	console.log(objValue);

	// 	objValue.x = 5;
	// 	console.log("after:");
	// 	console.log(objValue);

	// }

	// value = {x:7}
	// changeObject(value); //objValue = value
	// console.log("after changeObject, orginal value:");
	// console.log(value)

///
// function test(){
// 	console.log(this);
// 	this.myName = "tyler"
// }
// test();
// console.log(window.myName);

//Function constructors
	// function Circle(radius){
	// 	//console.log(this);
	// 	this.radius = radius;
	// }

	// Circle.prototype.getArea = 
	// 	function(){
	// 		return Math.PI *Math.pow(this.radius, 2)
	// 	};

	// var myCircle = new Circle(10);// new Object
	// console.log(myCircle.getArea());
	// //console.log(myCircle.getArea());

// Objet Literal 
	// var literalCircle = { //new object()
	// 	radius: 10,

	// 	getArea: function(){
	// 		console.log(this);
	// 		return Math.PI * Math.pow(this.radius, 2);
	// 	}
	// };

	// console.log(literalCircle.getArea());

//Array 
	// var array = new Array ()
	// array[0] = "Yaakov";
	// array[1] = 2;
	// array[2] = function (name){
	// 	console.log("Hello " +name);
	// };
	// array[3] = {course: " HTML, CSS & JS"};

	// console.log(array);
	// console.log(array[1]);
	// array[2]("Tyler");
	// array[2](array[0]);
	// console.log(array[3].course);
//Array shorthand
	// var names = ["Tyler", "Dori", "Annie"];
	// console.log(names);

	// for (var i = 0; i < names.length; i++){// this loops through the array until i is bigger than number of items in array
	// 	console.log("Hello "+ names[i]);
	// }


	// names[100] = "Jim";
	// for (var i = 0; i < names.length; i++){// this loops through the array until i is bigger than number of items in array
	// 	console.log("Hello "+ names[i]);
	// }

	// var names2 = ["Tyler", "Dori", "Annie"];

	// var myObj ={
	// 	name: "Tyler",
	// 	course: "Html design",
	// 	platform: "coursera"
	// };

	// for (var prop in myObj) {
	// 	console.log(prop + ":" + myObj[prop]);
	// }

	// for (var name in names2){
	// 	console.log("Hello "+ names2[name]);
	// }

	// names2.greetings = "Hi" // arrays will loop over anything and does not care if it doesnt match 

	// for (var name in names2){
	// 	console.log("Hello "+ names2[name]);
	// }

//Closures
	// function  makeMultipler (multiplier){
	// 	//var multiplier = 2;
	// 	function b(){
	// 		console.log("multiplier is: "+ multiplier)
	// 	}
	// 	b();
	// 	return (

	// 		function(x){
	// 			return multiplier * x;

	// 		}

	// 	);
	// }

	// var doubleAll = makeMultipler(2);
	// console.log(doubleAll(10));

//Study and create Fake namespace examples 

	// var a = function a (){
	// 	console.log("Hello Worlds");
	// }

	// a();
	//Immediately Invoked Function Expression
	//IIFE
	// (function a (){
	// 	console.log("Hello Worlds");
	// })();











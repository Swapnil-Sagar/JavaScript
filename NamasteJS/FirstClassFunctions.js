// Function Statement aka Function Declaration
function a() {
  console.log("a is called");
}
a();

//--------------------------------------------------

// Function Expression
var b = function () {
  console.log("b is called");
};
b();

//if we call b() before declaring it then it will throw an error because it is a stored as a var and not a function

//--------------------------------------------------

//Anonymous Functions

// function () {   // This will throw an error

// }
//but we can use anonymous functions by assigning them to variable:
var a = function () {}; // it will not throw error

//----------------------------------------------------

//Named Function Expression

var c = function xyz() {
  console.log("c is called");
};
c();

//xyz() will thorw an error as xyz is not created in global scope, so it can be called inside the scope

//------------------------------------------------------------------

//Difference between Parameters and Arguments

var d = function (param1, param2) {
  console.log("these are params");
};

d(1, 2); //  these are arguments

//----------------------------------------------------------

//First Class Functions

// ability of functions to be used as values and to be passed as arguments is known as first class functions.
// we can pass functions inside functions as an arguments.

var a = function (param1) {
  // it will behave same with let and const
  return function () {};
};

console.log(b());

//First class citizens are also known as first class functions.

//-------------------------------------------------------------

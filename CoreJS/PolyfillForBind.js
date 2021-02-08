let name = {
  firstname: "Swapnil ",
  lastname: "Sagar ",
};

let printName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + "from " + hometown + " in " + state
  );
};

let printMyName = printName.bind(name, "Jamshedpur");
printMyName("Jharkhand");

//everything written in Function.prototype can have access be accessed by any method
// Function.prototype.mybind = function (...args) {
//   let obj = this;
//   return function () {
//     obj.call(args[0]);
//   };
// };

// Function.prototype.mybind = function (...args) {
//   let obj = this;
//   params = args.slice(1); //remove first elements of argumens and returns the rest
//   return function () {
//     obj.apply(args[0], params); // we use apply method because slice returs the arguments in form of array
//   };
// };

// let printMyName2 = printName.mybind(name, "Jamshedpur");
// printMyName2();

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1); //remove first elements of argumens and returns the rest
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]); //[...params, ...args] this will concatinate two array args and send as 1 argumnets
  };
};

let printMyName2 = printName.mybind(name, "Jamshedpur");
printMyName2("Jharkhand");

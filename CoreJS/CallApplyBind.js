let name = {
  firstname: "Swapnil ",
  lastname: "Sagar ",
};

// let printFullName = function () {
//   console.log(this.firstname + " " + this.lastname);
// };

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + "form " + hometown + " in " + state
  );
};

printFullName.call(name, "Jamshedpur ", "Jharkhand "); //first argument is only for this reference and rest are for parameters

let name2 = {
  firstname: "Elevate ",
  lastname: "Labs ",
};

//function borrowing
printFullName.call(name2, "Bangalore ", "Karnataka");

//apply method

printFullName.apply(name2, ["Bangalore ", "Karnataka"]);

//bind method

let printMyName = printFullName.bind(name2, "Bangalore ", "Karnataka"); // it returns a copy which can be invoked later
console.log(printMyName);
printMyName();

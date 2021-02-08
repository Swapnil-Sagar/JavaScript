getName();
console.log(x);

console.log(getName);

var x = 7;

function getName() {
  console.log("Sagar");
}

//These will not behave like function because it is a variable hence if we invoke this at top then it will throw error
var getName1 = () => {
  console.log("Sagar again");
};

var getName2 = function () {
  console.log("Return of Sagar");
};

getName();
getName1();
console.log(x);
console.log(getName);

// what is hoisting
// Explain with code about execution context and creation phase.

//Using Bind()

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

//the above line is similar to

// let multiply = function (y) {
//     let x=2;
//   console.log(x * y);
// };

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

//Using Closures

let multiply2 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiply2ByTwo = multiply2(2);
multiply2ByTwo(12);

let multiply2ByThree = multiply2(3);
multiply2ByThree(10);

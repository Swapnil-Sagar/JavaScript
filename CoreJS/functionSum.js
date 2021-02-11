let sum1 = function (a) {
  return function (b) {
    if (b) {
      //Check if 2nd argument has a value or not
      return sum1(a + b);
    }
    return a;
  };
};

console.log(sum1(1)(2)(3)(4)(5)());

//ES6 Suntax

let sum2 = (a) => {
  return (b) => {
    return b ? sum2(a + b) : a;
  };
};

console.log(sum2(6)(7)(8)(9)(10)());

//More Simpler
let sum3 = (a) => (b) => (b ? sum3(a + b) : a);

console.log(sum3(11)(12)(13)(14)(15)());

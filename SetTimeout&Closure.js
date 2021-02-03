// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i); // it will be printed later
//   }, 3000);
//   console.log("Sagar"); // it will be printed first
// }
// x();

//printing 1 to 5 after some time interval
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();
//this will print 6 after 1s of time interval because it is taking reference of variable which is stored.
// This happens because of closure

//it will be fixed if we use let instead of var | cause let is block scoped | let will create new copy each time
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();

// how to do it with var?? | we have to create closure:
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
x();

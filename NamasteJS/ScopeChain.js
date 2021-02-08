// function a() {
//   console.log(b);
// }
// var b = 10;
// a();

// function a() {
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// var b = 10;
// a();   // runs because of lexical environment

function a() {
  var b = 10;
  c();
  function c() {}
}

a();
console.log(b); // Gives Error

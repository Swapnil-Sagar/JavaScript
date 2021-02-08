// Callback Function

// setTimeout(function () {
//   console.log("timer");
// }, 5000);
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });

//X has responsibility to call y .. Y is calledback by x

//click handler:
// document.getElementById("clickMe")
// .addEventListener("click", function xyz() {
//   console.log("Button is clicked");
// });

//click handler using closure

function attachEventListerners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
  });
}

attachEventListerners();

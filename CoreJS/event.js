//This is default eventListener wher event will bubble out

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("GrandParent CLicked");
//   },
//   false
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent CLicked");
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child CLicked");
//   },
//   false
// );

//Even capturing where flags are set as true
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("GrandParent CLicked");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent CLicked");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child CLicked");
//   },
//   true
// );

//true - Capturing
//False - Bubbling

//Stop Propagation
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("GrandParent CLicked");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent CLicked");
    e.stopPropagation();
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child CLicked");
  },
  false
);

//Event will stop at parent

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});

//We can use promise to run mulitiple functions at same time

const P1 = new Promise((resolve, reject) => {
  resolve("Task 1");
});
const P2 = new Promise((resolve, reject) => {
  resolve("Task 2");
});
const P3 = new Promise((resolve, reject) => {
  resolve("Task 3");
});

Promise.all([P1, P2, P3]).then((messages) => {
  console.log(messages);
});

Promise.race([P1, P2, P3]).then((message) => {
  console.log(message);
});

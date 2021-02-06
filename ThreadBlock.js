console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

// thread block

let startDate = new Date().getTime(); //Gives current date and time
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expires");

//although setTimeout expires after 5sec , the while will run for 10sec and then setTimeout functions executes

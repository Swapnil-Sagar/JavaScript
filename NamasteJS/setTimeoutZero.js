console.log("Start");

function cb() {
  console.log("Callback");
}

setTimeout(cb, 0);

console.log("End");

// setTimeout 0 is put so that a less important code must not execute before imporant code. (Concurrency model)
// It is used when we want a code to execute only after all the importanct code has been executed.

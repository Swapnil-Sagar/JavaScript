const expensive = () => {
  console.log("Throttled");
};

const throttle = (func, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = throttle(expensive, 1000);
window.addEventListener("resize", betterExpensive);

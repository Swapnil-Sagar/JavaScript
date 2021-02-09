let counter = 0;
const getData = () => {
  //calls an API and get data
  console.log("fetching data..", counter++);
};

//if delay is 300ms between two keystrokes then setTimeout will call the function
const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};
const betterFunction = debounce(getData, 300);

let object = {
  name: "Swapnil ",
  city: "Jamshedpur ",
  getIntro: function () {
    console.log(this.name + "from " + this.city);
  },
};

let object2 = {
  name: "Aman ",
};

//Never do this
object2.__proto__ = object; //We can access city from object2 because of inheritance

console.log(object.getIntro());
console.log(object2.getIntro());

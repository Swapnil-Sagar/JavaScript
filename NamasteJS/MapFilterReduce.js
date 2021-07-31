// MAP
// perform any operaton on each value of array

const map = [2, 4, 6, 8, 10];

// double
const map2 = map.map((item) => item * 2);

//binary
const map3 = map.map((item) => item.toString(2));

console.log("MAP ARRAY ->", map, map2, map3);

// FILTER
// finding out values from array based on a logic

const filter = [1, 2, 3, 4, 7, 6, 8, 10];

//filter all odd values

const filter2 = filter.filter((item) => item % 2);

console.log("Filter ARRAY ->", filter, filter2);

//REDUCE
// take all values from the array and come up with a single value out of them

const reduce = [1, 2, 3, 4, 7, 6, 8, 10];

// curr is the current values and acc accumulates the calculated value
// sum

const reduce2 = reduce.reduce((acc, curr) => (acc = acc + curr), 0);
//max
const reduce3 = reduce.reduce((max, curr) => max < curr && (max = curr), 0);

console.log("Reduce ARRAY ->", reduce, reduce2, reduce3);

// ===========================Trick Objects=============

const user = [
  {
    age: 11,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    age: 32,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    age: 13,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    age: 46,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
  {
    age: 32,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
];

// get name and userName

const userDetails = user.map((id) => `${id.name} ${id.username}`);

console.log("USER DETAILS ->", userDetails);

//give ages with count

const userAge1 = user.reduce(function (count, age) {
  if (count[age.age]) {
    count[age.age] = ++count[age.age];
  } else {
    count[age.age] = 1;
  }
  return count;
}, {});

//Below is not working when used arrow function
const userAge = user.reduce(
  (count, age) =>
    count[age.age] ? (count[age.age] = ++count[age.age]) : (count[age.age] = 1),
  {}
);

console.log("USER AGE COUNT ->", userAge, userAge1);

// find name of users whose age is less than 30
//Functional chaining
const less30 = user
  .filter((user) => user.age < 30)
  .map((filteredUser) => filteredUser.name);

//above code using reduce
const less30R = user.reduce(function (name, age) {
  if (age.age < 30) name.push(age.name);
  return name;
}, []);

console.log("USER <30 ->", less30, less30R);

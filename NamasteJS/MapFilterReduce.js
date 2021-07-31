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

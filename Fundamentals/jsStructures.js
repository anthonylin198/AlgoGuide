// Map: a collegtion of keyed data items, but allows keys of any type



// Set: Values may occur only once
const set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john); // this does not matter

console.log(set)
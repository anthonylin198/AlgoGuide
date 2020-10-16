// todo: Creating an object: Key value pairs where the key must be a string
const cache = { string1: true, string2: true };

for (let key in cache) {
  console.log(key);
}

console.log(Object.keys(cache).length); // length of the object
console.log(cache.hasOwnProperty("string1")); // checks if a key exists in the object

// todo: Map: collection of keyed data items, but Maps allow keys of any time
// create the map
const map = new Map();

// adding values to the map - regular object would convert these to strings, but we keep to actual values
map.set("1", "str1");
map.set(1, "num1");
map.set(true, "boolean");
map.set(cache, "This is an object"); // being able to use object as keys is on of the most notable and important features
console.log(map);

for (let key of map) {
  console.log(key);
}

// todo: Set: Set of values without keys where each value can only appear once. Must be strictly equal in memory
console.log("SET STUFF");
const set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let john2 = { name: "John" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set);
console.log(set.size);

//iterating a set
for (let user of set) {
  console.log(user);
}

console.log(set.has({ name: "John" }));

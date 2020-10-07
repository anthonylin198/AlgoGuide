// ! Keep functions pure without sideeffects, and look into filter vs map vs reduce vs foreach

// Literally don't have a single let


// todo: forEach - for every element on the array, we are calling a callback function which gets element and its index. Works as a traditional for loop looping over the array and proving array elements to do operatons on them
const sample = [1, 2, 3];

// es5
// sample.forEach(function (elem, index) {
//   console.log(elem + ' comes at ' + index);
// })

// es6
sample.forEach((elem, index) => `${elem} comes at ${index}`);

// console.log(sample);




// todo: Filter - whenever nede to filter an array - provide a callback for every slement and return a filter array - returns a filtered array
// es5
// const result = sample.filter(function (elem) {
//   return elem !== 2;
// })


// es6
const result = sample.filter(elem => elem !== 2)

console.log(result)


// todo: Map - takes a callback and runs on every element in an array, but GENERATES NEW ARRAY BASED ON EXISTING ARRAY
const sample2 = [1, 2, 3]

// es5
// const mapped = sample.map(function (elem) {
//   return elem * 10;
// })

// es6 
const mapped = sample2.map(elem => elem * 10)
// console.log(mapped)


// todo: Reduce - Reduces the array to a single value. For example, to add all elements of an array
const sample3 = [1, 2, 3]

// es5
// const sum = sample.reduce(function(sum, elem) {
//   return sum + elem
// })

// es6
const sum = sample3.reduce((sum, elem) => sum + elem)
// console.log(sum)

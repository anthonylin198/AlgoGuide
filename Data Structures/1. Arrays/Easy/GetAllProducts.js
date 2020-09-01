/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?

*/

// Given an array of a t least 2 integers, return array of all possible products of multiplying all but one number

//Input: [1, 7, 3, 5]
// Output: [84, 12, 28, 21]

// getting combination in javascript
const getAllProducts = (array) => {
  // create an array that will store all elements for the output
  const productsArr = [];
  for (let i = 0; i < array.length; i++) {
    const newArray = array.slice(0, i).concat(array.slice(i + 1));
    let product = 1;
    for (let j = 0; j < newArray.length; j++) {
      product *= newArray[j];
    }
    productsArr.push(product);
  }
  // return the array where we pushed
  return productsArr;
};

console.log(getAllProducts([1, 7, 3, 4]));

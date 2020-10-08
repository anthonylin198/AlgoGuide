// write a function that takes in a special array and returns its product sum

// there can be various depths depends on the number of brackets

// todo: given a special array - create for loop to iterate through, if Array, then we make a recursive call
function productSum(array, level = 1) {
  // keep track of the sum
  let sum = 0
  // create a loop to iterate through the array
  for (let i = 0; i < array.length; i++) {
    // if the array[i] is an array, then we make a recursive call
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], level + 1); // this will just add 1 as the callstack increases, won't actual set equal to
    } else {
      // else, we just add elements to the sum
      sum += array[i]
    }
  }
  // return the sum value * level for each level of the array - this adds to the sum
  return sum * level;
}

array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
console.log(productSum(array))
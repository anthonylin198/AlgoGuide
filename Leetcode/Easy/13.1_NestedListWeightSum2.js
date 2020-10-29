/*

Given a nested array of arrays, make sure to add together, and each layer will be multiplied by even more


*/

/*


[1, 2 [1, 2, [3, 4]], 1, 2]

1 + 2 + 2(1 + 2 + 3(3 + 4)) + 1 + 2



*/

// default way 1 + 2(x) + 3(x)
function addNested(arr, depth = 1) {
  // keep track of the sum
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += addNested(arr[i], depth + 1); // understand these recursive solutions
    } else {
      sum += arr[i] * depth;
    }
  }
  return sum;
}

// nest way 1 + 2(x + 3(x)) --- space would be O(d) -- from the recursive call stack
function addNested2(arr, depth = 1) {
  // keep track of the sum
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += addNested2(arr[i], depth + 1); // understand these recursive solutions
    } else {
      sum += arr[i];
    }
  }
  return sum * depth;
}

console.log(addNested([1, 2, 3, [4, 5, [6]]]));
console.log(addNested2([1, 2, 3, [4, 5, [6]]]));

// create a sum to keep track

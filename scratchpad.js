/*
Product Sum: Write a function that takes in a special array and returns its product sum



A special array is non-empty array that containers integers or other special arrays




[5, 2, [7, -1], 3, [6, [-13, 8], 4]]





15
6
22


*/

// really understand and trace through the problem NO MATTER WHAT

function productSum(arr) {
  let sum = 0;

  // helper function that will add to sum
  function helper(arr, level = 1) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        helper(arr[i], (level + 1) * level);
      } else {
        sum += arr[i] * level;
      }
      console.log(sum);
    }
  }

  helper(arr);

  // after loop return sum * level
  return sum;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));

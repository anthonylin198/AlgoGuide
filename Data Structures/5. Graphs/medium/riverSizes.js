// Given a two dimensional array (matrix) of potentially unequal height and width

// write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order

// Brute force, iterating array through array to find pattern

// 2, 2, 2, 3, 3 : 12 total river spots

// keep comparing the river below - we keep a cache of the starting of the rivers

// ! rivers can be horizontal so this solution does not work
// [1, 0, 0, 1, 0]    {0: 1, 3: 1}
// [1, 0, 1, 0, 0]    {0: 2, 2: 1, 3: 1}
// [0, 0, 1, 0, 1]    {0: 2, 2: 2, 3: 1, 4: 1}
// [1, 0, 1, 0, 1]    {0: 1, 2: 3, 3: 1, 4: 2}
// [1, 0, 1, 1, 0]

// ! more generalized, keep track of 1 river at a time, and cache every river that we have passed. Brute Force
// Start at each index in that matrix, then compare to the rest of the matrix. Keep track of all "used" rivers. We start at index [0,0]

// [1, 0, 0, 1, 0]
// [1, 0, 1, 0, 0]
// [0, 0, 1, 0, 1]
// [1, 0, 1, 0, 1]
// [1, 0, 1, 1, 0]

// cache = {00: true, 01: true}
// riversArr = [];

// check 0,0 : riversArr = [2]
// check 0,1 :
// check 0,3 : riversArr = [1]
// check 0,4
// check 1:0

// Time complexity: Running through matrix is O(W * H )
function riverSizes(matrix) {
  // create array to keep track of river lengths and cache to store each value that has been checked
  const arr = [];
  const visited = matrix.map((row) => row.map((value) => false)); // create a map of all false values

  console.log(visited);
  const cache = {};
  // create a visited map

  // for loop to iterate through outer array (O(W))
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     // create function to get river length, add connected river values to cache, and store in array -  O(W * L) time & O(W * L space)
  //     const riverLength = getRiverLength(matrix, arr, cache, [i, j]);
  //   }
  // }
  // // return array
  // return arr;
}

const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

riverSizes(matrix);

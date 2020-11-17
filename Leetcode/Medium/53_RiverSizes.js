/*

Given a 2-dimensional array of potentially unequal height and width containing 0 and 1s, each 0 represents
land, 1 is river. Write a function that gets ll the river sizes


ALGOEXPERT

*/

/*


Create a loop that iterates through the rows and columns

If we find a 1, we need to hit an explore helper function, that will
continue to search and iterate the size of the river, and end up 
pushing tht to an array


*/

function riverSizes(matrix) {
  // create arr to store all the sizes
  const arr = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      // if we see a 1, we call the rivertraverse
      if (matrix[r][c] === 1) {
        arr.push(riverTraverse(matrix, r, c));
      }
    }
  }
  return arr;
}

// create helper function that will return length of river
function riverTraverse(matrix, r, c) {
  let currentRiverSize = 0;
  // conditional to check we are in valid grid, and if there is a 0
  function traverseHelper(matrix, r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r > matrix.length - 1 ||
      c > matrix[0].length - 1 ||
      matrix[r][c] !== 1
    ) {
      return;
    }
    // If pass all the conditionals change the 1 to 0
    console.log("here", currentRiverSize);
    matrix[r][c] = 0;
    currentRiverSize++;
    // recursive calls
    // traverse top
    traverseHelper(matrix, r - 1, c);
    traverseHelper(matrix, r + 1, c);
    traverseHelper(matrix, r, c - 1);
    traverseHelper(matrix, r, c + 1);
  }
  traverseHelper(matrix, r, c);
  return currentRiverSize;
}

const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

console.log(riverSizes(matrix));

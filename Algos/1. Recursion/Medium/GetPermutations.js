
// Get permutations: Takes an array of unique integers and returns an array of all permutations of those integers in no particular order -- if input array is empty, function should return an empty arra
// array = [1, 2, 3]
// output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

// todo: recursive function using swap - O(n*n!) time and O(n*n!) space
function getPermutations(array) {
  // create empty array to store permutations
  const permutations = [];
  // call helper function to get all permutations
  permutationsHelper(0, array, permutations);
  // return permutations
  return permutations;
}

function permutationsHelper(i, array, permutations) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array)
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
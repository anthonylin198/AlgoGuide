// ! Prompt: Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order
// ! If the input array is empty, the function should return an emptyarry

function getPermutations(array) {
  const permutationsList = [];
  // create an iffe recursive function that will push each permutation into the permutation list
  (function generate(arr = array, permutation = []) {
    // if the length of the array is empty, but permutation length exists
    if (!arr.length) {
      permutationsList.push(permutation);
    } else {
      // create a for loop, and make recursive call inside the for loop, start with a different array each time
      for (let i = 0; i < arr.length; i++) {
        const newArray = arr.slice(0, i).concat(arr.slice(i + 1));
        console.log(newArray);
        const newPermutation = permutation.concat([arr[i]]);
        generate(newArray, newPermutation);
      }
    }
  })();
  return permutationsList;
}

console.log(getPermutations([0, 1, 2]));



// Get permutations: Takes an array of unique integers and returns an array of all permutations of those integers in no particular order -- if input array is empty, function should return an empty arra
// array = [1, 2, 3]
// output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

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
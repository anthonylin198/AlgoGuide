
// Get permutations: Takes an array of unique integers and returns an array of all permutations of those integers in no particular order -- if input array is empty, function should return an empty arra
// array = [1, 2, 3]
// output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]


// todo: Recursive solution - O(n^2 * n!) , O(n * n!) space - [1,2,3], [1,3,2] -> [2,1,3], [2,3,1] -> [3,1,2], [3,2,1]

// todo: [1,2,3,4] [1,2,4,3],[1,3,2,4], [1,3,4,2], [1,4,2,3], [1,4,3,2] => [2, 1, 3, 4] -> Create an algorithm that will keep going to the right

function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
  // console.log(currentPermutation)
  if (!array.length && currentPermutation.length) { // second part is just to pass an additional test case
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      console.log(newArray)
      console.log(newArray)
      const newPermutation = currentPermutation.concat(array[i]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

array = [1, 2, 3]
console.log(getPermutations(array))





// todo: implement some sort of swap to be able to solve it
// todo: recursive function using swap - O(n*n!) time and O(n*n!) space. First iteration, indexes do not swap
// todo: [1,2,3], have not reach end so go back to index 1 and swap [1,3,2], this time we hit end so pushed back to start , [2,1,3], [2,3,1], [3,2,1], [3,1,2] --> [1,2,3]
function getPermutations2(array) {
  // create empty array to store permutations
  const permutations = [];
  // call helper function to get all permutations
  permutationsHelper(0, array, permutations);
  // return permutations
  return permutations;
}

function permutationsHelper2(i, array, permutations) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) { // for every index that starts at out index
      // j == i
      // [1, 2, ....]
      swap(i, j, array); // first time, swap j is equal to i
      // [2, 1, ....]
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array) // swap everything back to the original index, now goes to the next value in the array, and swaps those
      // [1, 2, ....]
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


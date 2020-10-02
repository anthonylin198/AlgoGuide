// input: [1, 3, 5]
// output: [1,3,5], [1,5,3], [3,1,5], [3,5,1],[5,1,3],[5,3,1]

// ! solution from algoexpertL O(n * n!) time and O(n*n!) space
function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation.concat([array[i]])
      permutationsHelper(newArray, newPermutation, permutations)
    }
  }
}

// console.log(getPermutations([1, 3, 5]))


// ! Better solution algoexpert: O(n*n!) time and O(n*n!) space

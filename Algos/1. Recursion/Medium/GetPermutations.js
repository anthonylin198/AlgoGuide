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

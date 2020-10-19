// input: [1, 3, 5]
// output: [1,3,5], [1,5,3], [3,1,5], [3,5,1],[5,1,3],[5,3,1]

/*
Grokking: BFS Approach

We need to keep track of the permutations in a queue


[1]
[3,1][1,3] insert the next value everywhere in the previous 2
[5,3,1][3,5,1]...

permutations[[3,1], [1,3] ]

[1]

[3,1] [1,3]


[5]


*/

// todo: Grokking solution - [1, 2, 3] - O(O(n!))
function getPermutations2(array) {
  const permutations = [[array[0]]];
  // create for loop from i = 0 to array.length
  for (let i = 1; i < array.length; i++) {
    // keep track of current length of permutations n = permutations.length
    console.log(permutations);
    const n = permutations.length;
    for (let j = 0; j < n; j++) {
      const perm = permutations.shift(); // get the value from before
      const newPermLength = perm.length;
      for (let k = 0; k < newPermLength + 1; k++) {
        const newPerm = perm.slice();
        newPerm.splice(k, 0, array[i]);
        permutations.push(newPerm);
      }
    }
  }
  return permutations;
}

console.log(getPermutations2([1, 2, 3, 4]));

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
      const newPermutation = currentPermutation.concat([array[i]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

// console.log(getPermutations([1, 3, 5]))

// ! Better solution algoexpert: O(n*n!) time and O(n*n!) space

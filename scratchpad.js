/*

Given a collection of distinct integers, return all possible permutations.


Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]


*/

/*

Return all possible permutations with the input of [1,2,3]      1,2,3    1,3,2     2,1,3  2,3,1        3,1,2    3,2,1


[1]
[2,1] , [1,2]
[3,2,1] [2,3,1] [2,1,3]          [3,1,2][1,3,2][1,2,3]

*/

/*

current = [1]

permutations = [[2,1]]

newPerm = [2,1]


*/

function permutations(arr) {
  const permutations = [[arr[0]]];
  // for loop iterating through arr from index 1 to arr.length
  for (let i = 1; i < arr.length; i++) {
    // get the current lenght of the array
    const currentLength = permutations.length;
    for (let j = 0; j < currentLength; j++) {
      const current = permutations.shift();
      for (let k = 0; k < current.length + 1; k++) {
        const newPerm = current.slice();
        newPerm.splice(k, 0, arr[i]);
        permutations.push(newPerm);
      }
    }
  }
  // return permutations
  return permutations;
}

console.log(permutations([1, 2, 3]));

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

todo: THIS IS YOUR STYLE OF SOLUTION TO FOLLOW
[1]
[3,1][1,3]
[5,3,1][3,5,1][3,1,5][5,1,3][1,5,3][1,3,5]

*/

//

function permute(nums) {
  // create an array htat will start with the first value in nums
  const permutations = [[nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    const permLength = permutations.length;
    for (let j = 0; j < permLength; j++) {
      const current = permutations.shift();
      for (let k = 0; k < current.length + 1; k++) {
        const currentPerm = current.slice();
        currentPerm.splice(k, 0, nums[i]);
        permutations.push(currentPerm);
      }
    }
  }
  return permutations;
}

console.log(permute([1, 2, 3]));

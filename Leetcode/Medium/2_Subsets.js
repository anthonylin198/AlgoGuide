/*

Given a set of DISTINCT integers, numbs, return all possible subsets (the power set)

Solution set must not contain udplicate subsets




Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

*/

/*

Follow depth first search technique
[]
[]      [1]
[][1]            [2][1,2]

*/

// todo: Simple subset solution
function subsets(nums) {
  const subsets = [[]];
  for (let i = 0; i < nums.length; i++) {
    const currentLength = subsets.length;
    for (let j = 0; j < currentLength; j++) {
      const newSubset = subsets[j].slice();
      newSubset.push(nums[i]);
      subsets.push(newSubset);
    }
  }
  return subsets;
}

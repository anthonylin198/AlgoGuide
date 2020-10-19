// Given a set of numbers that might contain duplicats, find all of its distinct subsets

// input: [1, 3, 3]
// output: [], [1], [3], [1,3], [3,3], [1,3,3]

// Solution: Similar to the Breadth first search approach. We just need to handle duplicates.

/*
[1, 2, 3]

Start with the empty, and KEEP MAKING COPY AND ADDING THE NEW NUMBER

[]

[][1]

[][1][2][1,2]

[][1][2][1,2][3][1,3][2,3][1,2,3]

*/

// ! THIS IS FOR NO DUPLICATES
function getSubsets(nums) {
  // create an array to store all the subsets, start with an empty array
  const subsets = [[]];
  // for loop to iterate array from i = 0 to i < arr.length
  for (let i = 0; i < nums.length; i++) {
    // inner for loop iterate from j = 0 to j < subsets.length
    const n = subsets.length;
    for (let j = 0; j < n; j++) {
      // create a clone with slice of each subset
      const newSubset = subsets[j].slice();
      // add the current index and push
      newSubset.push(nums[i]);
      subsets.push(newSubset);
    }
  }
  return subsets;
}

console.log(getSubsets([1, 2, 3]));

/*


input [1, 3, 3, 3]

[]
[][1]

[][1][3][1,3]


keep track of start index and end index
[][1][3][1,3][3,3]

[][1][3][1,3][3,,3]


*/

// Time complexity: O(2 ^ N)
// ! This is if there are duplicates
function find_subsets(nums) {
  // sort the numbers to handle duplicates nums.sort();
  const subsets = [[]];
  let startIndex = 0;
  let endIndex = 0;
  for (i = 0; i < nums.length; i++) {
    startIndex = 0;
    // if current and the previous elements are same, create new subsets only from the sub that didn't include the new number before
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex + 1;
    }
    endIndex = subsets.length - 1; //
    for (j = startIndex; j < endIndex + 1; j++) {
      // create a new subset from the existing subset and add the current element to it
      const set = subsets[j].slice(0);
      set.push(nums[i]);
      subsets.push(set);
    }
  }
  return subsets;
}

console.log("Here is the list of subsets: ");
// result = find_subsets([1, 5, 3]);
// result.forEach((subset) => {
//   console.log(subset);
// });

console.log(find_subsets([1, 2, 3, 3]));
// console.log(result);

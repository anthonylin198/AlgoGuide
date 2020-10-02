// Given a set of numbers that might contain duplicats, find all of its distinct subsets

// input: [1, 3, 3]
// output: [], [1], [3], [1,3], [3,3], [1,3,3]

// Solution: Similar to the Breadth first search approach. We just need to handle duplicates. first sort, hten follow the BFS approach
// Time complexity: O(2 ^ N)
function find_subsets(nums) {
  // sort the numbers to handle duplicates nums.sort();
  const subsets = [];
  subsets.push([]);
  let startIndex = 0,
    endIndex = 0;
  for (i = 0; i < nums.length; i++) {
    startIndex = 0;
    // if current and the previous elements are same, create new subsets only from the sub // added in the previous step
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex + 1;
    }
    endIndex = subsets.length - 1;
    for (j = startIndex; j < endIndex + 1; j++) {
      // create a new subset from the existing subset and add the current element to it 
      const set = subsets[j].slice(0);
      set.push(nums[i]);
      subsets.push(set);
    }
  }
  return subsets;
}


console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log(result)


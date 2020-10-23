/*

Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.


Input: [[1,1],2,[1,1]]
Output: 10 
Explanation: Four 1's at depth 2, one 2 at depth 1.

Input: [1,[4,[6]]]
Output: 27 
Explanation: One 1 at depth 1, one 4 at depth 2, and one 6 at depth 3; 1 + 4*2 + 6*3 = 27.

*/

/*


todo: Iterate through the input array, if it is an array make recursive call. Keep track of counter, and do count *

sum = 10

[1, 1]



*/

function depthSum(nestedList) {
  // create a variable to keep track of the sum
  let sum = 0;
  // create recursive helper function that iterates through hte array: keep track of the depth as well
  function depthSumHelper(nestedList, level = 1) {
    for (let i = 0; i < nestedList.length; i++) {
      if (Array.isArray(nestedList[i])) {
        depthSumHelper(nestedList[i], level + 1);
      } else {
        sum += level * nestedList[i];
      }
    }
    return;
  }
  depthSumHelper(nestedList);
  // return the sum
  return sum;
}

const depthSum2 = (nestedList, depth = 1) => {
  let sum = 0;
  for (let el of nestedList) {
    if (Array.isArray(el)) sum += depthSum2(el, depth + 1);
    else sum += depth * el;
  }
  return sum;
};

const nestedList = [[1, 1], 2, [1, 1]];
console.log(depthSum2(nestedList));

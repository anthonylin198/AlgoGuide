/*

Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.


Input: [[1,1],2,[1,1]]
Output: 10 
Explanation: Four 1's at depth 2, one 2 at depth 1.

Input: [1,[4,[6]]]
Output: 27 
Explanation: One 1 at depth 1, one 4 at depth 2, and one 6 at depth 3; 1 + 4*2 + 6*3 = 27.



2nd alternate:
Input: [1,[4,[6]]]
Output: 1 + 2(4 + 3(6))
43

*/

/*


Problem 1:
Input: [1,[4,[6]]]

sum = 1 + * 

1, [2 *4] + 3 * 6 -- don't nest the multiplication









sum([1,[4,[6]]])     end of this iteration : sum = 1
sum([4], [6])             end of this iteration: sum = 5






*/

function sum(arr, depth = 1) {
  // create a variable to store the sum
  let totalSum = 0;
  // create a loop that will iterate through the array
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      totalSum += sum(arr[i], depth + 1);
    } else {
      totalSum += arr[i];
    }
  }
  return totalSum * depth;
}

console.log(sum([1, [4, [6]]]));

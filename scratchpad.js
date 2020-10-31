/*

Write a function that takes in an array of integers and return the length of hte longest peak of the array



array = [1,2,3,3,4,0,10,6,5,-1,-3,2,3]


6    // 0, 10, 6, 5, -1, -3



*/

/*

solve: identify the peaks by checking if the left and right values are lees than i

[1,2,3,3,4,0,10,6,5,-1,-3,2,3]
                                   
3, 4, 0   - length is 3


left 0, right: -3   -- keep track of startindex (move to the left) and endindex (move to the right)   rightindex - leftindex + 1


*/

function longestPeak(arr) {
  // keep track of the longest peak
  let longest = 0;
  // if the length of the arr is 0, or 1, or 2, then there are no peaks
  if (!arr.length || arr.length === 1 || arr.length === 2) return 0;
  // create a loop to iterate through, from 1 to arr.length
  for (let i = 0; i < arr.length; i++) {
    // if arr[i-1] && arr[i+1] < arr[i]
    if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
      let left = i - 1;
      let right = i + 1;
      // while loop to go left
      while (left && arr[left - 1] < arr[left]) {
        left--;
      }
      while (right && arr[right + 1] < arr[right]) {
        right++;
      }

      longest = Math.max(longest, right - left + 1);
    }
  }
  return longest;
}

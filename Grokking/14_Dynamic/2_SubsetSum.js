// Given a set of positive numbers, determine if a subset exists whose sume is equal to given number 'S'

// Input: [1,2,3,7], S = 6
// Output: true (1 + 2 + 3)

// ! number 165, understand in detail - O(N * S) where N represents total numbers and 'S' is the required sum
// ! somehow create a graph, able to mark certain things true, certain things false
const canPartition = function (num, sum) {
  const n = num.length;
  const dp = Array(n)
    .fill(false)
    .map(() => Array(sum + 1).fill(false));
  // populate the sum=0 columns, as we can always form '0' sum with an empty set
  for (let i = 0; i < n; i++) dp[i][0] = true;
  // with only one number, we can form a subset only when the required sum is equal to its
  for (let s = 1; s <= sum; s++) dp[0][s] = num[0] === s;
  // process all subsets for all sums 
  for (let i = 1; i < num.length; i++) {
    for (let s = 1; s <= sum; s++) {
      // if we can get the sum 's' without the number at index 'i' 
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s];
      } else if (s >= num[i]) {
        // else include the number and see if we can find a subset to get the remaining su
        dp[i][s] = dp[i - 1][s - num[i]];
      }
    }
  }
  // the bottom-right corner will have our answer.
  return dp[num.length - 1][sum];
};
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);
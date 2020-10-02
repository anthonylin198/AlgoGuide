// ! 169: Target Sum(hard)
// given a set of positive numbers adn a target sum 'S'. Each number should be assigned either a + or a - sign. Find total ways to align symbols to make numbers reach target S


// ! Brute Force: do some type of permutation to get every possible combination. Example is just


// ! Dynamic programming solution. 
const findTargetSubsets = function (num, s) {
  let totalSum = 0;
  for (let i = 0; i < num.length; i++) totalSum += num[i];
  // if 's + totalSum' is odd, we can't find a subset with sum equal to '(s + totalSum) /
  if (totalSum < s || (s + totalSum) % 2 == 1) return 0;
  return countSubsets(num, (s + totalSum) / 2);
};
// this function is exactly similar to what
let countSubsets = function (num, sum) {
  const n = num.length; const dp = Array(n)
    .fill(0)
    .map(() => Array(sum + 1).fill(0));
  // we have in 'Count of Subset Sum' problem.
  // populate the sum=0 columns, as we will always have an empty set for zero sum
  for (let i = 0; i < n; i++) dp[i][0] = 1;
  // with only one number, we can form a subset only when the required sum is equal to its
  for (let s = 1; s <= sum; s++) {
    dp[0][s] = num[0] == s ? 1 : 0;
  }
  // process all subsets for all sums 
  for (let i = 1; i < num.length; i++) {
    for (let s = 1; s <= sum; s++) {
      // exclude the number
      dp[i][s] = dp[i - 1][s];
      // include the number, if it does not exceed the sum 
      if (s >= num[i]) dp[i][s] += dp[i - 1][s - num[i]];
    }
  }
  return dp[n - 1][sum];
}


console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 1, 2, 3], 1)}`);
console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 2, 7, 1], 9)}`);
// ! Question: given an array of positive integers representing coin denominations and n, n representing target, find smallest coins needed

// [1, 5, 10] with 7 being the goal, then the lowest possible would be 3.
// etch cases where going largest to smallest would no work: [1, 3, 5] -- our goal is 9 -- using the default technique would be 5, then we would have 3
// Todo: working solution -- brute force recursive solution where we try every possible combination
// ? Takeaways: Remember -- when keeping track of a number, just do +1 in recursive statement or it will not reset properly
function minNumberOfCoinsForChange(n, denoms) {
  // create a integer that will store the lowest possible
  let minCoins = 100;
  const sorted = denoms.sort(function (a, b) {
    return b - a;
  });
  (function generate(target = n, currentMinCoins = 0) {
    // create the base case, which will be when the target is 0
    if (target === 0) {
      minCoins = Math.min(currentMinCoins, minCoins);
      return;
    }
    if (target < 0) {
      minCoins = -1;
      return;
    }
    // create a for loop that will iterate through array starting from index 0, and make recursive call
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] > target) {
        continue;
      }
      generate(target - sorted[i], currentMinCoins + 1);
    }
  })();
  // return the integer
  return minCoins;
}

console.log(minNumberOfCoinsForChange(24, [1, 5, 10]));

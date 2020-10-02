// Prompt: Given the weights and profits of 'N' items, put these items in a knapsack with capacity 'C'. Goal is to get maximum profit out of the items in the knapsack. Each item can only be selcted once
// don't have mnultiple quantities of any items.

// Merry wants to carry fruit in knapsack to get max profit.


// Given 2 integer arrays to represent weights and profits of 'N' items, need to find subset of these tiems to get the maximum profit so cumulative weight is not more than given number 'C'.



// ! brute force: Try all combinations of the given numbers, to eventually get the maximum profit - Time complexity O(2^n), space is O(n)
let solveKnapsack = function (profits, weights, capacity) {
  function knapsackRecursive(profits, weights, capacity, currentIndex) {
    // base checks
    if (capacity <= 0 || currentIndex >= profits.length) return 0;
    // recursive call after choosing the element at the currentIndex
    // if the weight of the element at currentIndex exceeds the capacity, we shouldn't pro
    let profit1 = 0;
    if (weights[currentIndex] <= capacity) {
      profit1 =
        profits[currentIndex] +
        knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex)
    }
    // recursive call after excluding the element at the currentIndex
    const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);
    return Math.max(profit1, profit2);
  }
  return knapsackRecursive(profits, weights, capacity, 0);
};
var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
// console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
// console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);

// ! Top down memoization: storing the results of all previously solved sub problems and return the results from memory if we encounter a problem that has already been solved
// O(N * C) c is the  knapsack capacity and O(n) space for recursion call stack
let solveKnapsack2 = function (profits, weights, capacity) {
  const dp = [];
  function knapsackRecursive(profits, weights, capacity, currentIndex) { // base checks
    if (capacity <= 0 || currentIndex >= profits.length) return 0;
    dp[currentIndex] = dp[currentIndex] || [];
    if (typeof dp[currentIndex][capacity] !== 'undefined') {
      return dp[currentIndex][capacity];
    }
    // recursive call after choosing the element at the currentIndex
    // if the weight of the element at currentIndex exceeds the capacity, we shouldn't pro
    let profit1 = 0;
    if (weights[currentIndex] <= capacity) {
      profit1 =
        profits[currentIndex] +
        knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex);
    }
    // recursive call after excluding the element at the currentIndex
    const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);
    dp[currentIndex][capacity] = Math.max(profit1, profit2);
    return dp[currentIndex][capacity];
  }
  return knapsackRecursive(profits, weights, capacity, 0);
};
var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack2(profits, weights, 7)}`); console.log(`Total knapsack profit: ---> ${solveKnapsack2(profits, weights, 6)}`);


// ! We only need O(C) - as only need the row above
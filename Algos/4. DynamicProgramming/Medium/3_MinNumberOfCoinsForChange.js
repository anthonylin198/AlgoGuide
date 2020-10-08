

// given integer n, write a function that returns the smalles number of coins need to sum up to that. Denominations of [1, 5, 10]

// input: n = 7
// denoms = [1, 5, 10]


// todo: 

//  0, 1, 2, 3, 4, 5, 6, 7
// [0, 1, 2, 3, 4, 1, 2, 3] -- buikd array up with how many coins to create each - the answer is 3
function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let i = 0; i < numOfCoins.length; i++) {
      // we need to take numOfCoins[i] = Math.min(numOfCoins[i], 1 + numOfCoins[i - denom])
      if (denom <= i) numOfCoins[i] = Math.min(numOfCoins[i], 1 + numOfCoins[i - denom])

    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}
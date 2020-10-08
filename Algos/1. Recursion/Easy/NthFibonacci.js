// Fibonacci sequence: first number is 0, second is 1, the nth is the sum of (n-1) and (n-2) numbers
// write a function that takes in an integer n and returns the nth Fibonacci number

// 0, 1, 1, 2, 3, 5, 8, 13
// O(n) time and O(1) space
// todo: Iterative O(n) time and O(1) space
function getNthFib(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = nextFib;
    counter++
  }

  return n > 1 ? lastTwo[1] : lastTwo[0]
}



function getNthFib(n) {
  // create an array that will store the previous 2
  const arr = [0, 1];
  // create a for loop to iterate from index 2 to index n
  for (i = 2; i < n; i++) {
    const newFib = arr[0] + arr[1]
    arr[0] = arr[1];
    arr[1] = newFib;
  }

  // if n is larger than 1, then we can return the second number in prev 2 arary
  if (n > 1) {
    return arr[1];
  } else {
    return arr[0];
  }
}

// todo: Recursive brute force solution: O(2^n) | O(n) space -- we are doing a lot of unecessary calculations -- because everything calls 2 more fibs - recursive function uses call stack
// understand fundamentals of recursion, we are essentially creating 2 branches here
function getNthFib2(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2)
  }
}

// todo: Recursive solution with memoize O(n) time and O(n) space
function getNthFib3(n, cache = { 1: 0, 2: 1 }) {
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] = getNthFib(n - 1, cache) + getNthFib(n - 2, cache); // the second part, we can just pull directly from the cache
    return cache[n]
  }
}

// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

var isHappy = function (n) {
  // set a variable equal to n outside
  const startingNum = n;
  isItHappy = false;

  (function checkIsHappy(inputNum = n, cache = { startingNum: true }) {
    // prase to a string
    const str = inputNum.toString();
    // create a loop to iterate through the string
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Math.pow(parseInt(str[i]), 2);
    }
    console.log(sum);
    if (sum === 1) {
      isItHappy = true;
      return;
    } else if (sum in cache) {
      isItHappy = false;
    } else {
      cache[sum] = true;
      checkIsHappy(sum, cache);
    }
  })();

  return isItHappy;
};



// todo: Do the 2 pointer approach
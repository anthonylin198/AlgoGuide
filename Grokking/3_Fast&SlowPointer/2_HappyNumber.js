// a happy number will eventually lead us to the number 1. Determine if a number is happy or not.
// input: 23
// output: true

/*

input: 23 
4 + 9 = 13

1 + 9 = 10

1 + 0 = 1

Output: true


input: 82
64 + 4 = 68
34 + 64 = 100
1 + 0 + 0 = 1

input: 83
64 + 9 = 73
49 + 4 = 53
25 + 9 = 34
9 + 16 = 25
4 + 25 = 29
4 + 81 = 85
64 + 25 = 89 ----> CYCLE
64 + 81 = 145
1 + 16 + 25 = 42
16 + 4 = 20
4 = 4
16 = 16
1 + 36 = 37
9 + 49 = 58
25 + 64 = 89 ---> CYCLE


output: false --> goes in a never ending cycle


Solution: fast and slow pointer approach -- we know that if the fast pointer enters the cycle, the slow and fast pointer will inevitably meet

each iteration, check if square sum is 1, if it is then return true

else check if the slow pointer is equal to fast pointer, if they are equal return false


through the while loop, we will have to perform square digit O(n) time


*/

function myHappyNumber(num) {
  // create slow variable
  let slow = num;
  // create fast variable
  let fast = num;
  // while true
  while (true) {
    // O(logn)
    slow = squareDigits(slow);
    fast = squareDigits(squareDigits(fast)); //O(3d)
    if (fast === 1) {
      return true;
    }
    if (fast === slow) {
      return false;
    }
  }
}

function squareDigits(num) {
  // change num to a string
  const digitStr = num.toString();
  // keep track of the sum
  let sum = 0;
  for (let i = 0; i < digitStr.length; i++) {
    sum += Math.pow(parseInt(digitStr[i]), 2);
  }
  // return the value
  console.log(sum);
  return sum;
}

console.log(myHappyNumber(23));
console.log(myHappyNumber(83));

// Solution: Similar  to the linkedlist cycle
// Time Complexity: O(logN) because if the number N is less than or equal to 2000, we reach the cycle or 1 in at most 1001 steps. N1<81M 9 squared is the highest possible)
// Space Complexity: O(1) space
function find_happy_number(num) {
  let slow = num,
    fast = num;
  while (true) {
    slow = find_square_sum(slow); // move one step
    fast = find_square_sum(find_square_sum(fast)); // move two steps
    if (slow === fast) {
      // found the cycle
      break;
    }
  }
  return slow === 1; // see if the cycle is stuck on the number '1'
}
function find_square_sum(num) {
  let sum = 0;
  while (num > 0) {
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(find_happy_number(23));
console.log(find_happy_number(12));

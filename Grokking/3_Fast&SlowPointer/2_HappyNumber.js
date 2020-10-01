// a happy number will eventually lead us to the number 1. Determine if a number is happy or not
// input: 23
// output: true 

// Solution: Similar  to the linkedlist cycle
// Time Complexity: O(logN) because if the number N is less than or equal to 2000, we reach the cycle or 1 in at most 1001 steps. N1<81M 9 squared is the highest possible)
// Space Complexity: O(1) space
function find_happy_number(num) {
  let slow = num,
    fast = num;
  while (true) {
    slow = find_square_sum(slow); // move one step
    fast = find_square_sum(find_square_sum(fast)); // move two steps 
    if (slow === fast) { // found the cycle
      break;
    }
  }
  return slow === 1; // see if the cycle is stuck on the number '1'
}
function find_square_sum(num) {
  let sum = 0;
  while ((num > 0)) {
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(find_happy_number(23));
console.log(find_happy_number(12));
/*

Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.



Example 1:
Input: a = "11", b = "1"
Output: "100"


Example 2:
Input: a = "1010", b = "1011"
Output: "10101"


*/

/*

Learn The Rules of Adding Binary Numbers: 


1010
1011

10101

if both are one we carry


todo: Solution with start with p1 and p2 that start from the end of the binary. Also keep a carry. If the sum is 0, we do x. If the sum is 1, digit is 1. If the sum is 2, we reutrn 0 and carry is equal to 1

sum="10011"
p1=
p2=
carry = 1

1010
1001

1) 1 + 0 = 1
2) 1 + 1 = 2  

*/

function addBinary(a, b) {
  // create p1 and p2 that start from a.length and b.length respectively
  let p1 = a.length - 1;
  let p2 = b.length - 1;
  // create a variable to keep track if there is a carry
  let carry = 0;
  // keep track of the sum
  let sum = "";
  // while p1 >= 0 or p2 >=0 or carry exists
  while (p1 >= 0 || p2 >= 0 || carry) {
    const firstNum = p1 < 0 ? 0 : a[p1] - "0";
    const secondNum = p2 < 0 ? 0 : b[p2] - "0";
    const digitSum = firstNum + secondNum + carry;
    sum = (digitSum % 2) + sum;
    carry = Math.floor(digitSum / 2); // better way to do it
    p1--;
    p2--;
  }
  // return the sum
  return sum;
}

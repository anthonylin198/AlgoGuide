/*

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2. Purpose of this is because you can not add sum of extremely large numbers


The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

/*
   0111
1239999
+   101
_______
    100



Start from the last digit in bother arrays, and continuously add num1 + num2 + carry
Push the new number to new string: string = newDigit + String

"1239999"
'101"

1: "0"  
2: "00"
3: "100"

... 

*/

function addStrings(num1, num2) {
  // create 2 pointer variables for num1.lenght and num2.length
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let carry = 0;
  let newNum = "";
  // while the numbers are greater than
  while (p1 >= 0 || p2 >= 0 || carry > 0) {
    digit1 = p1 >= 0 ? parseInt(num1[p1]) : 0;
    digit2 = p2 >= 0 ? parseInt(num2[p2]) : 0;
    // find the sum: firstDigit + seconddigit + carry
    let digitSum = digit1 + digit2 + carry;
    carry = digitSum >= 10 ? 1 : 0;
    // take the first digit in the sum and push
    newNum = (digitSum % 10) + newNum;
    p1--;
    p2--;
  }
  return newNum;
}

/*

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2. Purpose of this is because you can not add sum of extremely large numbers


The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

/*


test case: '52' '8'
output: 60


iterate through the string, going one value at a time, starting fomr the large number.



test case : '123999'     '101'


sum = '00'
p1 = 9
p2 = 1
carry = 0

123999
   101

1) 9 + 1 + 0 = 10    carry = 1     p1-- p2--
2) 9 + 0 + 1 = 10    carry = 1     p1-- p2 --
3)



if p1 is less than 0, then we just return 0
    

*/

var addStrings = function (num1, num2) {
  sum = "";
  p1 = num1.length - 1;
  p2 = num2.length - 1;
  let carry = 0;
  // while p1, or p2, or carry exists
  while (p1 >= 0 || p2 >= 0 || carry > 0) {
    // get the first digit and the second digit
    const firstNum = p1 < 0 ? 0 : num1[p1] - "0";
    const secondNum = p2 < 0 ? 0 : num2[p2] - "0";
    // digitSum = digit1 + digit2 + carry
    const digitSum = firstNum + secondNum + carry;
    // set sum equal to the first digit in digitSum with % and append to the original carry
    sum = (digitSum % 10) + sum;
    // sum = `${digitsSum % 10}${sum}`;  COULD ALSO DO IT THIS WAY
    // if /%10 >0, we know we can set carry to 1
    carry = Math.floor(digitSum / 10);
    // decrement p1 and p2
    p1--;
    p2--;
  }

  // reuturn sum
  return sum;
};

console.log(addStrings("123499999", "1"));

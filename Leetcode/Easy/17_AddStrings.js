/*

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.


The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

/*


test case: '52' '8'
output: 60




do not convert directly. JS will try to match types when possible.

*/

function AddStrings(num1, num2) {
  const int1 = 1 * num1;
  const int2 = 1 * num2;

  return int1 + int2;
}

var addStrings2 = function (num1, num2) {
  let len = num1.length > num2.length ? num1.length : num2.length;
  let l1 = num1.length - 1,
    l2 = num2.length - 1;
  let carry = 0,
    out = "",
    sum = 0;
  for (let i = 0; i < len; i++) {
    sum = parseInt(num1[l1 - i] || 0) + parseInt(num2[l2 - i] || 0) + carry;
    out = (sum % 10) + out;
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) out = carry + out;
  return out;
};
console.log(AddStrings("5", "10"));

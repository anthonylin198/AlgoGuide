/*

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces. 

The integer division should truncate toward zero.

*/

/*

totalSum = 3
currentSum = 3 * 4 * 5 * 6 / 7 +

Input: "1+2+3*4*5*6/7+9+10"
            p
Output: 7

We look for the next valid character, if it is plus, or we rech the end of the string
then we add our current sum to the total sum

If the sign is a multiplication or division, we need to loop through until we hit a plius

*/

// Input: " 1+2+3*4*5*6/7+9+10"

// ! Just replace the spaces
var calculate = function (s) {
  s.replace(/\s/g, "");
  let num = "";
  let calc = [];
  let prevSign = "+";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      num += s[i];
    }
    if (isNaN(s[i]) || i == s.length - 1) {
      if (prevSign == "+") {
        calc.push(Number(num));
      } else if (prevSign == "-") {
        calc.push(Number(-num));
      } else if (prevSign == "*") {
        calc.push(Math.floor(calc.pop() * num));
      } else {
        calc.push(Math.trunc(calc.pop() / num));
      }
      prevSign = s[i];
      num = "";
    }
  }
  return calc.reduce((a, b) => a + b);
};

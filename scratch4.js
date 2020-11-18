/*


Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.


*/

/*
Input: "3+2*3*4-10/5+1"
Output: 7

keep a variable that will keep track of the sign

keep and array to store values 
[3]
[3, 2]
[3, 6]
[3, 24]
[3, 24, -10]
[3, 24, -2]
[3, 24, -2, 1]


Iterate through the string input, if we hit a number,  we push to the arr

If we get addition or subtraction, we know we can continue through without looking back
If we get multiplication or division, we need to keep overwriting the value in our array


*/

// doesn't quite work, MAKE SURE TO GET THE ENTIRE NUMBER FIRST
function calculate(s) {
  // create arr to store numbers
  const arr = [];
  let operation = null;

  // iterate through s
  for (let i = 0; i < s.length; i++) {
    console.log(arr);
    // get next valid character
    if (s[i] === " ") {
      continue;
    }
    // if the value is a symbol
    if (s[i] === "+" || s[i] === "/" || s[i] === "*" || s[i] === "-") {
      operation = s[i];
    } else {
      if (operation === "+" || !operation) {
        arr.push(Number(s[i]));
      }
      if (operation === "number") {
        arr[arr.length - 1] =
          arr[arr.length - 1] > 0
            ? arr[arr.length - 1] * 10 + Number(s[i])
            : arr[arr.length - 1] * 10 - Number(s[i]);
      }
      if (operation === "-") {
        arr.push(Number(s[i]) * -1);
      }
      if (operation === "*") {
        arr[arr.length - 1] = arr[arr.length - 1] * Number(s[i]);
      }
      if (operation === "/") {
        arr[arr.length - 1] = Math.floor(arr[arr.length - 1] / Number(s[i]));
      }
      operation = "number";
    }
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(calculate("0-2131231"));

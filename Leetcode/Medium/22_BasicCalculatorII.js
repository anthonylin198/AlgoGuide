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

// Input: " 12+2+3*4*5*6/7+9+10"

// [1,2,60,9,10,-20]

// ! Just replace the spaces
function calculate(s) {
  if (s == null || s.length === 0) return null;

  // remove space
  s = s.replace(/\s/g, "");

  let st = [];
  let n = 0;
  let sign = "+";

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    // number - get an integer -- getting the next number
    if (/\d/.test(c)) n = n * 10 + Number(c); // e.g. '14' -> 1 * 10 + 4
    // sign or last number
    if (/\D/.test(c) || i === s.length - 1) {
      if (sign === "-") st.push(-n);
      else if (sign === "+") st.push(n);
      else if (sign === "*") st.push(st.pop() * n);
      else if (sign === "/") st.push(~~(st.pop() / n));

      sign = c;
      n = 0;
    }
  }
  return st.reduce((a, b) => a + b);
}

console.log(calculate("12+2+3+4*5"));

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

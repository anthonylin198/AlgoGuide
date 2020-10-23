/*
You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:


An integer x - Record a new score of x.
"+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.


Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.


*/

/*


Solution1: Keep an array to store values as the come, follow the various cases

[5, 10, +]


*/

function calPoints(ops) {
  // create empty array to store values
  const arr = [];
  // create for loop to iterate through the array of values
  for (let i = 0; i < ops.length; i++) {
    console.log(arr);
    // if is equal to  +, record sum of previous 2
    if (ops[i] === "+") {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    } else if (ops[i] === "D") {
      arr.push(arr[arr.length - 1] * 2);
    } else if (ops[i] === "C") {
      arr.pop();
    } else {
      arr.push(parseInt(ops[i]));
    }
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(calPoints(["5", "2", "C", "D", "+"]));

// functional;
var calPoints = function (ops) {
  const res = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "C") res.pop();
    else if (ops[i] === "D") res.push(2 * res[res.length - 1]);
    else if (ops[i] === "+")
      res.push(res[res.length - 1] + res[res.length - 1 - 1]);
    else res.push(parseInt(ops[i]));
  }
  return res.reduce((x, y) => x + y);
};

console.log(typeof ("5" - "0"));

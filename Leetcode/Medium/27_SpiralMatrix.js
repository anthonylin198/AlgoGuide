/*

Given an m x n matrix, return all elements of the matrix in spiral order.


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12][13,14,15,16]]

Output: [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]


*/

/*

start off pushing the entire top array

*/

var spiralOrder = function (matrix) {
  const res = [];
  while (matrix.length) {
    const first = matrix.shift();
    res.push(...first);
    for (const m of matrix) {
      let val = m.pop();
      if (val) res.push(val);
      m.reverse();
    }
    matrix.reverse();
  }
  return res;
};

// Recursive Solution
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  if (matrix[0].length === 0) return [];

  let result = [];
  // ADD FIRST ROW
  result = result.concat(matrix.shift());

  // ADD LAST COL
  for (let i = 0; i < matrix.length - 1; i++) {
    result.push(matrix[i].pop());
  }

  // ADD LAST ROW
  const lastRow = matrix.pop();
  if (lastRow) result = result.concat(lastRow.reverse());

  // ADD FIRST COL
  for (let i = matrix.length - 1; i >= 0; i--) {
    if (matrix[i].length) result.push(matrix[i].shift());
  }

  return result.concat(spiralOrder(matrix));
};

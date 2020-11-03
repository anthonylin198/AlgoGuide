/*


You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 

DO NOT allocate another 2D matrix and do the rotation.


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]


*/

/*

todo: Solution using o n * n space: Push values to the cache on iteration

cache:{1: 7, 2: 4, 3: 1, 4: 8, 5: 5, 6: 2} etc...


todo: Solve this problem in O(1) space
[[1,2,3],[4,5,6],[7,8,9]]
[[7,4,1],[8,5,2],[9,6,3]]


Reverse the arr
[[3,2,1], [6,5,4], [9,8,7]]

[[7,2,1], [6,5,4], [9,8,3]]
[[7,2,1], [8,5,4], [9,6,3]]
[[7,4,1], [8,5,2], [9,6,3]]


swap: 7 and 3
swap: 8 and 6
swap: 4 and 2



[[1,2,3],[4,5,6],[7,8,9]]
[[1,4,7],[2,5,8],[3,6,9]]

Output: [[7,4,1],[8,5,2],[9,6,3]]


[[1,4,7],[2,5,8],[3,6,9]]

2 with 4
3 with 7

transpose the matrix, nested for loop for i=0


*/

// transpose matrix - nested for loop for i = 0
function rotate(matrix) {
  // create loop from i = 0 to i < matrix .length
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // create a loop to reverse each arr
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);

rotate(matrix);

console.log(matrix);

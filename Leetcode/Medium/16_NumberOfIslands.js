/*

Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.



Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1


Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

/*

solution: Start from one, and recursively look for everything connecting it. store the indices that we have already went passed, then continue. Keep a hashtable storing all indices passed

Edge Cases: Constraints on the island, is there a possibility that is empty

cache{"00": true "01": true, "02" true}
[0][0]   [0][1]  [0][2]



*/

// todo: Personal solution
function numIslands(grid) {
  // create variable to keep track of number of islands
  let count = 0;
  // for loop to iterate through grid rows
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count++;
        traverse(i, j, grid);
      }
    }
  }

  return count;
}

// helper function to traverse through numIslands and change 1s to 0s
function traverse(row, col, grid) {
  if (
    row < 0 ||
    row > grid.length - 1 ||
    col < 0 ||
    col > grid[0].length - 1 ||
    grid[row][col] !== 1
  ) {
    return;
  }
  grid[row][col] = "0";
  traverse(row - 1, col, grid);
  traverse(row + 1, col, grid);
  traverse(row, col + 1, grid);
  traverse(row, col - 1, grid);
}

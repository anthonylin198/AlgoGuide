/*

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.



*/

/*

[2,0]
[0,1]    the one cannot be touched, so will stay fresh


Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Starting:
[2,1,1]
[1,1,0]
[0,1,1]

Step 1:
[2,2,1]
[2,1,0]
[0,1,1]

Step 2:
[2,2,2]
[2,2,0]
[0,1,1]

Step 3:
[2,2,2]
[2,2,0]
[0,2,1]

Step 3:
[2,2,2]
[2,2,0]
[0,2,2]


Replace each 1 with a 2 on each iteration. Keep track of the 1s on each iteration, and if 1 is equal to the previous, then we would return -1

*/

function orangesRotting(grid) {
  // create a counter variable, will increase on each iteration of the while loop
  let counter = 0;
  // create a variable to store the number of 1s that exist in the grid, also keep current count for 1s
  let current = findFresh(grid);
  let prev = null;
  // while any 1s exist in the grid && not equal to the previous;
  // keep a cache of the 2s that have been expanded
  const cache = {};
  while (current && current !== prev) {
    counter++;
    const rotten = findRotting(grid, cache); // [[0,0],[0,1][1,0]]
    // iterate through the rotten array
    for (let i = 0; i < rotten.length; i++) {
      let current = rotten[i];
      if (current[0] && grid[current[0] - 1][current[1]] === 1) {
        grid[current[0] - 1][current[1]] = 2;
      }
      if (current[1] && grid[current[0]][current[1] - 1] === 1) {
        grid[current[0]][current[1] - 1] = 2;
      }
      if (
        current[0] < grid.length - 1 &&
        grid[current[0] + 1][current[1]] === 1
      ) {
        grid[current[0] + 1][current[1]] = 2;
      }
      if (
        current[1] < grid[0].length - 1 &&
        grid[current[0]][current[1] + 1] === 1
      ) {
        grid[current[0]][current[1] + 1] = 2;
      }
    }
    prev = current;
    current = findFresh(grid);
  }

  // return the grid
  return counter;
}

// create a helper function to find the current indices for the rotting
function findRotting(grid, cache) {
  const arr = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 2 && !cache["" + i + j]) {
        cache["" + i + j] = true;
        arr.push([i][j]);
      }
    }
  }
  return arr;
}

// create helper function to find how many1s exist
function findFresh(grid) {
  counter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        counter++;
      }
    }
  }
  return counter;
}

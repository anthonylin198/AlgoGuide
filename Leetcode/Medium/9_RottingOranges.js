/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // keep counter for number of minutes elapsed
  let counter = 0;
  while (checkFresh(grid)) {
    // todo: check this part
    if (counter === 100) {
      return -1;
    }
    counter++;
    const rotten = findRotten(grid);
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
  }
  // return number of minutes
  return counter;
};

// check for ones
function checkFresh(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) return true;
    }
  }
  return false;
}

// create a helper function to check if any 1s exists
function findRotten(grid) {
  const arr = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) arr.push([i, j]);
    }
  }
  return arr;
}

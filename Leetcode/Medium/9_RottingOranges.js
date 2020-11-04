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

/*

Use BFS - search level by level, each level = another minute
Get the original rotten oranges, and start bfs from them


*/
var orangesRotting2 = function (grid) {
  let queue = [];
  let minutes = 0;
  let fresh = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) fresh++;
      if (grid[i][j] == 2) queue.push([i, j]);
    }
  }

  while (queue.length != 0 && fresh) {
    let dR = [0, -1, 0, 1];
    let dC = [-1, 0, 1, 0];

    let next = [];
    while (queue.length != 0) {
      let current = queue.shift();
      for (let i = 0; i < dR.length; i++) {
        let nR = current[0] + dR[i];
        let nC = current[1] + dC[i];
        if (nR >= 0 && nC >= 0 && nR < grid.length && nC < grid[0].length) {
          if (grid[nR][nC] == 1) {
            grid[nR][nC] = 2;
            fresh--;
            next.push([nR, nC]);
          }
        }
      }
    }
    minutes++;
    queue = next;
  }

  return fresh == 0 ? minutes : -1;
};

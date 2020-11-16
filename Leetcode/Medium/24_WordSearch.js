/*

Given an m x n board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring.

The same letter cell may not be used more than once.


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]

word = "ABACED"

*/

/*

[["A","B","A","E"],
["S","F","C","S"]
["A","D","E","E"]]

Same letter cell cannot be used more than once. Create a cache that keeps track of letters that have already been done.

Keep a counter starts at 1, add one each time we reach the next correct letter


*/

// ! PASSES MOST TEST CASES< SOMETHING WEIRD WITH THE CACHE NOT RESETTING PROPERLY
function exist(board, word) {
  // create loop to iterate through array of arrays
  let result = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        // call recursive helper function
        search(i, j, 0);
        if (result) {
          return true;
        }
      }
    }
  }

  function search(i, j, counter) {
    if (!result) {
      if (counter === word.length - 1) {
        result = true;
        return;
      } else if (
        i < 0 ||
        i > board.length - 1 ||
        j > board[0].length - 1 ||
        j < 0 ||
        board[i][j] !== word[counter]
      ) {
        return;
      } else {
        board[i][j] = null;
        search(i - 1, j, counter + 1);
        search(i + 1, j, counter + 1);
        search(i, j - 1, counter + 1);
        search(i, j + 1, counter + 1);
        // reset the board - understand this part
        board[i][j] = word[counter];
      }
    }
  }
  return result;
}

// ! LEETCODE

var exist = function (board, word) {
  let result = false;
  var check = function (r, c, i) {
    if (!result) {
      if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return; // out of boundary
      if (board[r][c] != word[i]) return; // wrong character
      if (i == word.length - 1) {
        // got to the end means we found a correct path
        result = true;
        return;
      }
      board[r][c] = null; // mark our path so we dont go back and forth
      // try all directions
      check(r + 1, c, i + 1);
      check(r - 1, c, i + 1);
      check(r, c + 1, i + 1);
      check(r, c - 1, i + 1);
      board[r][c] = word[i]; // reset our board , very important
    }
  };

  // loop iterating through
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word[0]) {
        check(i, j, 0);
        if (result) return result;
      }
    }
  }

  return result;
};

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"],
];

const word = "ABCESEEEFS";
console.log(exist(board, word));

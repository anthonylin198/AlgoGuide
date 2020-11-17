/*

Given two words (beginWord and endWord), and a dictionary's word list, 
find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.

beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

*/

/*

beginWord = "hit", 
endWord = "cog",    
wordList = ["hot","dot","dog","lot","log","cog"]

1) Iterate through to see if word exists, if not we jsut output 0
2) Recursive solution, look for every possibility to reach the end word, return the smallest
    -- Start with 2 pointers, each starting at 0 for each word
    -- check if there are single letter changes in each word, change the beginword 
            - start from the beginning again




*/

var ladderLength = function (beginWord, endWord, wordList) {
  // iterate through and see if word exists
  let checker = true;
  for (word of wordList) {
    if (word === endword) checker = false;
  }
  if (!checker) return 0;

  // create variable to store the minimum word ladder
  let minLadder = Infinity;
  // create recursive helper function
  function check(beginWord, endWord, wordList, counter, p1 = 0, p2 = 0) {
    // exit condition if no possible moves
    if (counter === wordList.length) {
      return;
    }
  }
};

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

/*

beginWord = "hit"
endWord = "cog"

Keep adding these letters to the queue, if it is in the word list because it could potentially be correct

ait
bit
cit
dit
...

zit

hat
hbt
hct
hdt
het


wordList = [ "hdg", "hdt", "hog", "cog", "hot"]

1) change wordlist into an object for direct access, can just use set and has
2) keep track of the number of steps outside of while
3) Keep a queue that will be the words that we want to keep trying
4) Try every possible character that could lead to our solution, if it exists in the wordlist, push to queue and remove

dict = {cit, hot, dot, dog, lot, log, cog, }
step = 1
q = [hit]

next = [];

*/

// Why is this a bfs solution
function ladderLength(beginWord, endWord, wordList) {
  const dict = new Set(wordList); // unique
  let step = 1;
  let q = [beginWord];
  while (q.length) {
    const next = []; // we must create next, or step++ will iterate too many times
    for (let w of q) {
      if (w === endWord) return step;
      // iterate through the word
      for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < 26; j++) {
          // construct the next word, keep 2 characters of the original, then try the new
          const w2 =
            w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i + 1); // 97 -> 'a'
          if (dict.has(w2)) {
            next.push(w2); // pushing different words to try
            dict.delete(w2); // deleting from the dictionary
          }
        }
      }
    }
    q = next; // setting q to be next
    step++;
  }

  return 0;
}

/*

beginWord = "hit"
endWord = "cog"

Solution: wordList = [ "hdg", "hdt", "hog", "cog", "hot"]

go through the wordlist, and look for any word that has a one character change. If there is a one letter change, then we can push

*/

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList));

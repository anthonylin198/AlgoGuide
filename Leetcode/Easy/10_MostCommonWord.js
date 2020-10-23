/*

Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]

Output: "ball"


Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.


*/

/*

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."


we see that hit occurs 3 times, ball occurs twice. Not case sensitive, so change each word in an array to be completely lowercase

todo: Create a cache that will store the list of banned words, and another cache to store the frequency count, and a variable that keeps track of the most recently added


{"ball": true}

{"bob": 0, hit: 0, }



*/

function mostCommonWord(paragraph, banned) {
  // create cache to stored banned words and cache to keep the frequency
  const bannedCache = {};
  const paragraphCache = {};
  // create a variable that will keep track of the max frequency
  let max = 0;
  let maxWord = "";

  // split the paragraph and save to variable
  const paragraphArr = paragraph.match(/[a-zA-Z]+/g);
  console.log(paragraphArr);
  // create loop iterating through banned array and create the cache, {cache: true}
  for (let word of banned) {
    bannedCache[word] = true;
  }
  // iterate through the split paragraph
  for (let word of paragraphArr) {
    const lowerCaseWord = word.toLowerCase();
    if (lowerCaseWord in bannedCache) {
      continue;
    } else {
      if (!paragraphCache[lowerCaseWord]) {
        paragraphCache[lowerCaseWord] = 1;
      } else {
        paragraphCache[lowerCaseWord]++;
      }
    }
    if (paragraphCache[lowerCaseWord] > max) {
      max = paragraphCache[lowerCaseWord];
      maxWord = lowerCaseWord;
    }
  }
  return maxWord;
}

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
);

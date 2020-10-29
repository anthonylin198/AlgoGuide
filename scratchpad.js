/*

In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.


Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.


Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.



Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' 
is defined as the blank character which is less than any other character

*/

/*

check if the words in the array are sorted in order. l come after h, so it is sorted.
d coes after l, then the sequence is unsorted.



Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.



todo: Store an object of key value pairs of the order of the new alphabet. Use arr.sort and return based off of the number code

hello vs helloz

Keep one pointer one first word, and one pointer on second word. If character
at first word is greater than the second word, return -1. If the character
at the second word is greaters, then return 1. IF they are equal, increment the pointers.
Also must check off index is at arr.length -1, if it is then return 1

If satisfies, then move to next word. 


["hello", "hellod", "helloe"]


*/

function verifyAlien(words, order) {
  // create an empty object to soter the order and asign numbers
  const cache = {};
  // loop through the order character
  for (let i = 0; i < order.length; i++) {
    cache[order[i]] = i;
  }

  // iterate throug the words arr, comparing letters along the way. Start from i = 1, and check i - 1
  for (let i = 1; i < words.length; i++) {
    if (!verifyOrder(words[i - 1], words[i], cache)) {
      return false;
    }
  }

  return true;
}

// helper function to check order. if word1 is less, then confirmed
function verifyOrder(word1, word2, cache) {
  // create a pointer for word 1 and word2
  let p1 = 0;
  let p2 = 0;
  while (p1 < word1.length && p2 < word2.length) {
    console.log(word1[p1], word2[p2]);
    if (cache[word1[p1]] < cache[word2[p2]]) {
      return true;
    } else if (cache[word1[p1]] > cache[word2[p2]]) {
      return false;
    }
    p1++;
    p2++;
  }
  // if we make it outside. Mean was always equal, if word 1 exists, return false
  console.log(p1);
  if (p1 === word1.length) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyAlien(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));

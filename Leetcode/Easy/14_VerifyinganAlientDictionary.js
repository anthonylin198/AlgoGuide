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

goal is to find if the words are sorted in the correct order, given the alien language

todo: Put the order into a dictionary, where each character has a corresponding number, then sort the list

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"

"{h: 0, l: 1... z: 26}"

sort the words


*/

const isAlienSorted = (words, order) => {
  // create cache to keep all the value
  const cache = {};
  for (let i = 0; i < order.length; i++) {
    cache[order[i]] = i;
  }

  // iterate through all the words, and continuously check if the next is greater than the first. if not false. If they are the same value, then we need to keep iterating through
  for (let i = 1; i < words.length; words++) {
    const firstWord = words[i - 1];
    const secondWord = words[i];
    if (cache[secondWord[0]] < cache[firstWord[0]]) return false;
    else if (cache[secondWord[0]] === cache[firstWord[0]]) {
      let pointer1 = 1;
      let pointer2 = 1;
      while (firstWord[pointer1] === secondWord[pointer2]) pointer1++;
    }
  }
};

const isAlienSorted2 = (words, order) => {
  // Creating the map
  let charPosition = new Map();
  for (let position = 0; position < order.length; position++) {
    let char = order[position];
    charPosition.set(char, position);
  }

  // iterating through the words
  for (let i = 1; i < words.length; i++) {
    let prev = words[i - 1],
      curr = words[i];
    if (charPosition.get(prev[0]) > charPosition.get(curr[0])) return false;
    else if (prev[0] === curr[0]) {
      let pointer = 1;
      while (prev[pointer] === curr[pointer]) pointer++;
      if (curr[pointer] === undefined) return false;
      if (charPosition.get(prev[pointer]) > charPosition.get(curr[pointer]))
        return false;
    }
  }
  return true;
};

/*


Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p 
will not be larger than 20,100.

The order of output does not matter.


*/

/*

s: "asd"

d: "sadsdddaasd"


We need to get the start indices of the anagrams

Brute Force Solution: Check every substring with length of "s"


Linear Time Solution: 

s: "asd"

d: "s  a  d  s  d  d  d  a  a  s  d"
         p1    p2

1) {a: 1, s: 1, d: 1}
2) Iterate through d, until we reach length, keep track of the obj, if all values are 0, then we know that the series of characters is an anagram



*/

var findAnagrams = function (s, p) {
  let hash = {},
    uniqueChars = 0;
  for (let c of p) {
    if (hash[c] == null) {
      uniqueChars++;
      hash[c] = 1;
    } else {
      hash[c]++;
    }
  }

  let res = [];
  let left = 0,
    right = 0;
  // this makes right iterate, we just need to change left
  for (right; right < s.length; right++) {
    if (hash[s[right]] != null) hash[s[right]]--;
    if (hash[s[right]] === 0) uniqueChars--;
    if (uniqueChars == 0) res.push(left);
    if (right - left + 1 == p.length) {
      if (hash[s[left]] != null) hash[s[left]]++;
      if (hash[s[left++]] == 1) uniqueChars++;
    }
  }
  return res;
};

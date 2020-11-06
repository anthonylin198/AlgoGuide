/*

Given a string s, return the longest palindromic substring in s.

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.


Input: s = "cbbd"
Output: "bb"

Input: s = "a"
Output: "a"

Input: s = "ac"
Output: "a"

*/

/*

Solution: "babad"

let longest =

b
ba
bab
baba
babad

a
ab
aba
abad

b
ba
bad

*/

/*

babbad

2 next to each other is an edge case we muyst follow

check for palindromes along the way





*/

function longestPalindrome(s) {
  var max = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      // left pointer and right pointer
      let left = i;
      let right = i + j;
      // while left exists and left is equal to right
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      // check if right - left - 1 because right a left are incremented and dec 1 extra time
      if (right - left - 1 > max.length) {
        max = s.slice(left + 1, right);
      }
    }
  }
  return max;
}

// todo: leetcode concise
var longestPalindrome2 = function (s) {
  var max = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      // for edge case given babba
      let left = i;
      let right = i + j;
      // check if s[left] exists because may be negatives
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};

console.log(longestPalindrome("aabba"));

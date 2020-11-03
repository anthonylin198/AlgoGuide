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


input: s = "babad"

counter: 3

b
ba
bab
baba
babad

ab
aba
abad

b
ba
bad

a
ad

d

*/

/*
babad      s.length = 5

b


babad



*/

// todo:  Brute Force Solution -- O(n)^2 time
function longestPalindrome(s) {
  // create variable to keep track of longest substring
  let longest = 0;
  let longestStr = "";
  // create loop to iterate through s, from i = 0 : first pointer
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let current = s.slice(i, j);
      if (isPalindrome(current) && j - i > longest) {
        longest = j - i;
        longestStr = current;
      }
    }
  }
  return longestStr;
}

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// babad
// todo: leetcode concise
var longestPalindrome2 = function (s) {
  var max = "";
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
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

// 2D DP
var longestPalindrome3 = function (s) {
  if (s.length <= 1) return s;
  // construct a 2D array
  const dp = [...new Array(s.length + 1)].map((_) =>
    new Array(s.length + 1).fill(false)
  );
  console.log(dp);
  let lps = "";

  // base case for one character
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    lps = s[i];
  }

  // base case for two characters
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) dp[i][i + 1] = true;
    if (dp[i][i + 1]) lps = s.substring(i, i + 2);
  }

  // expand to three or more characters
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      if (dp[i][j]) lps = lps.length < j - i + 1 ? s.substring(i, j + 1) : lps;
      console.log(dp);
    }
  }
  return lps;
};

console.log(longestPalindrome3("babad"));

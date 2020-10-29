/*

Given a non-empty string s, you may delete at most one character. 
Judge whether you can make it a palindrome.

Input: "aba"
Output: True

Input: "abca"
Output: True
Explanation: You could delete the character 'c'.


*/

/*

Check if the string is a substring after trying every possible substring



aba

aa

ab


Input: "racectar" -- iterate through the array, find new substring and check if it is a substring

racectar : false
acectar : false
rcectar : false
raectar : false
racctar L false
racetar : false
racecar : true


racctectar


rr
aa
ct


if cutting neither of these will work, return false


*/

// substring includes first, not last
function validPalindromeII(string) {
  // check if the original is a valid substring
  // for loop iterating through all characters in the string
  for (let i = 0; i < string.length; i++) {
    // create new string
    const newSubstring = string.substr(0, i) + string.substr(i + 1);
  }
  // return
}

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

Input: "aba"
This is a palindrom originally. A palindrome is made if there are even number of each character, one can stand out

If we have the abilitiy to delete, we get rid of this the moment we hit the 3rd pair


Input: "aabbccddef"  This can not be turned into a palindrom, as there are 2 pairs


Iterate through once and check if if the remaining is a palindrom

abbccddef   - splice index 0
abb          - splice index 1



Better way - can probably get to just 1/2 of it
abbccddef
abbccdde







check if it is, then delete the string at each character and check if it is a palindrome


*/

function validPalindrome(s) {
  if (isPalindrome(s)) return true;
  // chekc if is palindrome first
  let stop = s.length / 2;
  for (let i = 0; i < stop; i++) {
    let newString = s.substr(0, i) + s.substr(i + 1);
    if (isPalindrome(newString)) {
      return true;
    }
  }

  return false;
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

// todo: Faster solution - we can just keep just if equal
const validPalindrome = (s) => {
  for (let i = 0, stop = s.length / 2; i < stop; i++) {
    let j = s.length - i - 1;
    if (s[i] !== s[j]) {
      return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j)); // just one of them need to work out
    }
  }
  return true;
};

const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);

// use this to find the palindrome
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

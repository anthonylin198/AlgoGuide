// Todo 1 (EASY): Write a functino that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome. Same Forwared and backwards
// ! TAKEAWAYS:
// ? Solution 1: Time Complexity O(N) and Space Complexity O(N)
function isPalindrome(string) {
  let str = "";
  for (let i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  return string === str;
}

// ? Solution 2 O(n) time and O(1) space
function isPalindrome2(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

// Todo 2 (EASY): Caser Cipher Encrypter: Given a non-empty string of lowercase letters and a non negative integer representing a key, write a function that
// Todo : that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet. Letters should wrap around, z goes to a.
// ! TAKEAWAYS:

// ? Solution 1:
function ceasarCipherEncryptor(string, key) {
  // use a for loop to iterate through the string, and increase the char code by key.
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of string) {
    // this function gets the new letter
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join("");
}

function getNewLetter(letter, key) {
  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}

console.log(ceasarCipherEncryptor("xyz", 2));

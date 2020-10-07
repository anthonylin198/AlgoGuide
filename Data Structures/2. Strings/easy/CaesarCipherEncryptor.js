// given a non-empty string of lowercase, and a non-negative integer repping a key. write a function that returns new string obtained by shifting every letter in input string by k positions in the alphabet


// todo: solution - iterate through the string, convert each character to the number, add key to it, then add to a new string (O(n) time and O(n) space)
function caesarCipherEncryptor(string, key) {
  // create an arary to store the letters - strings are immutable so new one is created everytime
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join('')
}

function getNewLetter(letter, key) {
  const newLetterCode = letter.charCodeAt() + key;
  // if the code is less than 122, then we can just get the string at the char code. Else, we need to loop around
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
}


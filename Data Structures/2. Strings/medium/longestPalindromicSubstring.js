// write a function that given a string returns its longest palindromic substring



// todo: Solution: start from a, and find longest palindrome form there. Then start from b, a, x, etc...

function longestPalindromicSubstring(string) {
  let longest = 1;
  let substring = ''
  // if stringlength is one, solve here
  if (string.length === 1) {
    return string[0]
  }
  // create outer loop to iterate through the string
  for (let i = 0; i < string.length; i++) {
    let currentWord = string[i]
    for (let j = i + 1; j < string.length; j++) {
      // add character to the current word
      currentWord += string[j];

      // check if it is a palindrome
      if (isPalindrome(currentWord)) {
        if (currentWord.length > longest) {
          longest = currentWord.length;
          substring = currentWord;
        }
      }
    }
  }
  return substring
}


// function to check if it is a palindrome
function isPalindrome(string) {
  // pointers to left index and right index
  let leftIndex = 0;
  let rightIndex = string.length - 1;
  // create a while loop to check
  while (leftIndex < rightIndex) {
    if (string[leftIndex] !== string[rightIndex]) {
      return false;
    } else {
      leftIndex++;
      rightIndex--;
    }
  }
  return true;

}


// console.log(longestPalindromesubstring("racecar"))




// todo: O(n)^2 solution

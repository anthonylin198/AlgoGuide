// Palindrome question


// Write a function that takes non-empty string and returns whether or not string is a palindrome



// todo: Solution: Create anotheer string and just compare the string (O(n)^2 time and O(n) space)
function isPalindrome(string) {
  // create empty string to store
  const str = '';
  // create a for loop to iterate through the string
  for (let i = string.length - 1; i >= 0; i++) {
    // add each character to the string
    str += string[i];
  }
  // return boolean
  return str === string;
}


// todo: Solution: 2 pointer inplace solution (O(n) time and O(1) space)
function isPalindrome(string) {
  let leftIndex = 0;
  let rightIndex = string.length - 1;

  while (leftIndex < rightIndex) {
    if (string[leftIndex] === string[rightIndex]) {
      leftIndex++;
      rightIndex++;
    } else {
      return false;
    }
  }

  return true;
}
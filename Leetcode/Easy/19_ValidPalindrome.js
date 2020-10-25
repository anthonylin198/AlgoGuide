/*


Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.



Input: "A man, a plan, a canal: Panama"
Output: true



Input: "race a car"
Output: false

*/

/*

todo: Solution change string to lower case. Empty string is valid. Use.match to ensure that we only have a-z and A-Z. Then, we can just join the string into a word

amanaplanacanalpanama

then we can check if it is a palindrome

"0P"


",,,,,...."

this should return true



*/

// todo: Using the regex
function isPalindrome(s) {
  // create new string, make lowercase, then use.match, then .join ("")
  let newString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (!newString || newString.length === 1) return true;
  let left = 0;
  let right = newString.length - 1;
  while (left < right) {
    if (newString[left] !== newString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));

// todo: Better solution that will pass edge cases -- still do to pointer approach, but create a function to point

var isPalindrome = function (input) {
  var start = 0;
  var end = input.length - 1;
  while (start < end) {
    var s = input.charCodeAt(start);
    var e = input.charCodeAt(end);
    if (!isLetter(s)) {
      start++;
      continue;
    }
    if (!isLetter(e)) {
      end--;
      continue;
    }

    if (toLowerCase(s) !== toLowerCase(e)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

var isLetter = function (code) {
  if (
    (code >= 48 && code <= 57) || // numbers
    (code >= 65 && code <= 90) || // uppercase
    (code >= 97 && code <= 122)
  ) {
    // lowercase
    return true;
  } else {
    return false;
  }
};

// turns the character into a lowerCase based on the char code

var toLowerCase = function (code) {
  if (code >= 65 && code <= 90) {
    return code + 32;
  } else {
    return code;
  }
};

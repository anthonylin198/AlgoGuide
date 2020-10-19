// Prompt: given 2 strings containing backspaces - identified by #, check if the two strings are equal
// Input: str1 = "xy#z", str2 = "xzz#"
// Output: true - after applying backspaces both become xz

// Solution: use pointers starting at the end of both these strings, and compare the characters. If it is a #, then we can just skip to a character that can be compared
// The time complexity of the above algorithm will be O(M + N ) where ‘M’ and ‘N’ are the lengths of the two input strings respectively.
// Space complexity #
// The algorithm runs in constant space O(1).

/*

Input: str1 = "xy#z"   str2 = "xzz#"    backaspaced becomes xz and xz
Output: true


Input: str1 = "x#yyy#zz"   str2 = "x#y#yyzz"


todo: solution: Go through first string and push characters to a string until no more #. Start from the very end and go to the front. O(n) + O(n) , O(n) space

newStr = zzyy

z
z
# 
skip
y
y
# 

reached the front



newStr2 = zzyy



todo: Solution: 2 Pointer approach: make sure from the end, each next character is the same. Every time a # is hit, skip the character before

str1: z, z, y




str2: z, z

*/

function myBackSpaceCompare(str1, str2) {
  // create str1 pointer starting from the end
  // create str2 pointer starting from the end
  // while str1 OR str2 >=0
  // if the characters are equal continue and subtract 1 form str1Pointer and str2Pointer
  // else
  // if str1 === #, then we need to decrement twice to the pointer
  // if str2 === #, decrement twice to the pointer
  // if str1 && str2 is not equal to # then we get out
  //
  // return true if make it out
}

function backspace_compare(str1, str2) {
  // use two pointer approach to compare the strings
  let index1 = str1.length - 1,
    index2 = str2.length - 1;
  while (index1 >= 0 || index2 >= 0) {
    let i1 = get_next_valid_char_index(str1, index1);
    let i2 = get_next_valid_char_index(str2, index2);
    if (i1 < 0 && i2 < 0) {
      // reached the end of both the strings
      return true;
    }
    if (i1 < 0 || i2 < 0) {
      // reached the end of one of the strings
      return false;
    }
    if (str1[i1] !== str2[i2]) {
      // check if the characters are equal
      return false;
    }
    index1 = i1 - 1;
    index2 = i2 - 1;
  }
  return true;
}

// helper function to get the next valid character
function get_next_valid_char_index(str, index) {
  let backspaceCount = 0;
  while (index >= 0) {
    if (str[index] === "#") {
      // found a backspace character
      backspaceCount += 1;
    } else if (backspaceCount > 0) {
      // a non-backspace character backspaceCount -= 1;
    } else {
      break;
    }
    index -= 1; // skip a backspace or a valid character
  }
  return index;
}
console.log(backspace_compare("xy#z", "xzz#"));
console.log(backspace_compare("xy#z", "xyz#"));
console.log(backspace_compare("xp#", "xyz##"));
console.log(backspace_compare("xywrrmp", "xywrrmu#p"));

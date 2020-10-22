/*

Given a string, determine if a permutation of the string could form a palindrome.

Input: "code"
Output: false

Input: "aab"
Output: true

Input: "carerac" -- we can make racecar
Output: true

*/

/* 

Solution: Create a recursive algorithm to cycle through every possible combination of the string, and if any permutations of the string are equal, then a palindrom can be formed
Check isPalindrome for every possible combination

isPalindrome(carerac)
isPalindrom(craerac)
isPalindrome(crearac) - Go through every possible combination of characters until we find one that is a palindro



Solution 2: carerac -- 2 of each character, except at the middle it does not matter



"code"

{
  c: 1,
  i: 1,
  d: 1,
  e: 1
}

"careracrr"

{
  c: 2
  a: 2
  r: 4
  e: 1
  f: 1
}


0) Edge Cases - 0 characters, is that a palindrome, 1 character returns true, 
1) Create a cache to store frequency of characters
2) Iterate through the cache and check if greater than 1 value in the cache is odd




*/

function canPermutePalindrome(s) {
  // create a cache to store the frequency of each character
  const cache = {};
  // create loop to iterate through s and store to the cache
  for (let char of s) {
    if (!cache[char]) {
      cache[char] = 1;
    } else {
      cache[char]++;
    }
  }

  let odd = 0;
  // iterate through the cache and check if values in the object are odd
  for (let key in cache) {
    if (cache[key] % 2 === 1) {
      odd++;
    }
    if (odd === 2) {
      return false;
    }
  }

  // return cache
  return true;
}

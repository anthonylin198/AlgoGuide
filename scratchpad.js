/*

Given a string S, check if the letters can be rearranged so that two characters
that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.


Input: S = "aab"
Output: "aba"

Input: S = "aaab"
Output: ""

*/

/*


"aab"
"aba"


"aaab"
"abaa"

"aaabb"
"ababa"

In situations with odd number of characters, there must be more of a single character that
s.length/2 + 2

In situations with even number, there must be single character where s.length/2 + 1 characters

"aaaaabbb"
abababaa

0) Find the quota for how many characters is maximum for any single character
1) Iterate through the string, and place each character and a counter into an object {a:5, b: 3}
     If the number is greater than the maximum quota return ""

2) {a:4, c: 2 b: 4 d: 1}

3) Get these into an array, and get an array in order [a,b,c,d]

4) create an empty array that will store the result

5) Loop through the sort length, and continue adding odd numbers then even numbers


{a:5, b: 3, c: 2 d: 1}

[a, b, a, b, a, b, a, c, a, c, b, d ]

FILL IN ODDS THEN THE EVENs

*/

function reorganizeString(S) {
  let maxCharLimit = 0;
  // get the half p
  if (S.length % 2 === 0) {
    maxCharLimit = S.length / 2 + 1;
  } else if (S.length % 2 === 1) {
    maxCharLimit = Math.floor(S.length / 2) + 2;
  }

  const cache = {};
  for (let i = 0; i < S.length; i++) {
    if (cache[S[i]]) {
      cache[S[i]]++;
    } else {
      cache[S[i]] = 1;
    }
    if (cache[S[i]] === maxCharLimit) {
      return "";
    }
  }

  // create an array with the elements of the cache in a sorted order
  const sorted = Object.keys(cache).sort((a, b) => cache[b] - cache[a]);
  // create array that will store
  for (let i = 0; i < sorted.length; i++) {
    let current = cache[sorted[i]];
    for (let j = 0; j < current; j++) {}
  }
  // iterate through the sorted array

  // create arr to store the string
  const arr = [];
  let index = 0;
  // create a loop
  for (let i = 0; i < sorted.length; i++) {
    const current = cache[sorted[i]];
    // create a loop
    for (let j = 0; j < current; j++) {
      // if index is > S.length - 1, index = 1
      if (index > S.length - 1) index = 1;
      // insert at arr[index] = sorted[i]
      arr[index] = sorted[i];
      index += 2;
    }
  }
  return arr.join("");
}

console.log(reorganizeString("abcabcabc"));

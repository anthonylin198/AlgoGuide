/*

Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.


Input: S = "aab"
Output: "aba"

Input: S = "aaab"
Output: ""

*/

/*

todo: Get every possible permutation of the characters given. Each time we get a permutation, check if the character adjacent are all different



todo: Build a hash based on character count, sort the hash from the largest count to smallest
A character count that is larger than half of the string length is considered invalid
Start filling characters to all the even indexs, i.e. 0, 2, 4,..., when we got to the end, start filling odd indexes i.e. 1,3,5,...
By filling the characters this way, we can make sure that no same characters will be adjacent to each other


{a:3 b:2 c: 1 d:2 f:3}
{a:3, f:3, b: 2, d: 2, c: 1}

Choose the odd numbers then the even numbers
*/

var reorganizeString1 = function (S) {
  let hash = {};
  for (let c of S) hash[c] = hash[c] + 1 || 1;

  let sort = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);

  let res = [];
  let index = 0;

  for (let i = 0; i < sort.length; i++) {
    let occur = hash[sort[i]];
    if (occur > parseInt((S.length + 1) / 2)) return "";
    for (let j = 0; j < occur; j++) {
      console.log(res);
      if (index >= S.length) index = 1;
      res[index] = sort[i];
      index += 2;
    }
  }
  return res.join("");
};

console.log(reorganizeString1("aabbb"));

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

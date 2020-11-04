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
      if (index >= S.length) index = 1;
      res[index] = sort[i];
      index += 2;
    }
  }
  return res.join("");
};

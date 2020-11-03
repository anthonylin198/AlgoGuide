/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = [""]
Output: [[""]]

Input: strs = ["a"]
Output: [["a"]]

*/

/*

strs = ["eat","tea","tan","ate","nat","bat"]
todo: eat - save characters into a cache. check if others have the same characters. If they do, push to an array, and remove from the array - comparing objects would get messy

strs = ["tan, nat, bat"]
"eat"
["eat", tea, ate]


todo: sorted the characters in order. Iterate through the array, and sort each string. If strings are equal, push to current arr, then splice out of strs array



todo: Single pass: Create an object that will store "aet" []        



*/

// O(n) time and O(n) space solution     n is the length of tarray
function groupAnagrams(strs) {
  // create array to store groups of anagrams
  const anagrams = [];
  const cache = {};
  // iterate through the strs array
  for (let i = 0; i < strs.length; i++) {
    const current = strs[i].split("").sort().join("");
    if (cache[current]) {
      cache[current].push(strs[i]);
    } else {
      cache[current] = [strs[i]];
    }
  }
  // iterate through the cache and push to the anagrms array
  for (let key in cache) {
    anagrams.push(cache[key]);
  }
  // return anagrams array
  return anagrams;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

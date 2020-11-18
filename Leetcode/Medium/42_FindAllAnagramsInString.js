/*


Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p 
will not be larger than 20,100.

The order of output does not matter.


*/

/*

s: "cbaebabacd" p: "abc"

[0, 6]


Check every group of 3: loop for let i=0; i < p.length
c   b   a   e   b   a   b   a   c   d

   p    p


cba: true
bae: false
aeb: false
eba: false
bab: false
aba: false
bac: true
acd: false


*/

// Find anagrams grind
var findAnagrams = function (s, p) {
  let hash = {},
    uniqueChars = 0;
  for (let c of p) {
    if (hash[c] == null) {
      uniqueChars++;
      hash[c] = 1;
    } else {
      hash[c]++;
    }
  }

  let res = [];
  let left = 0,
    right = 0;
  // this makes right iterate, we just need to change left
  for (right; right < s.length; right++) {
    if (hash[s[right]] != null) hash[s[right]]--;
    if (hash[s[right]] === 0) uniqueChars--;
    if (uniqueChars == 0) res.push(left);
    if (right - left + 1 == p.length) {
      if (hash[s[left]] != null) hash[s[left]]++;
      if (hash[s[left++]] == 1) uniqueChars++;
    }
  }
  return res;
};

// time complexity: O(s * p)    space complexty: O(1)
function findAnagrams(s, p) {
  // create the character counter for p {a:1, b:1, c:1}
  const arr = [];
  let uniqueChars = 0;
  const charCache = {};
  for (let i = 0; i < p.length; i++) {
    if (charCache[p[i]]) {
      charCache[p[i]]++;
    } else {
      uniqueChars++;
      charCache[p[i]] = 1;
    }
  }
  // loop iterating through s
  for (let i = 0; i < s.length - p.length + 1; i++) {
    const currentCache = { ...charCache };
    for (let j = i; j < i + p.length; j++) {
      if (currentCache[s[j]]) {
        currentCache[s[j]]--;
      }
      if (currentCache[s[j]] === 0) {
        uniqueChars--;
      }
      if (!uniqueChars) {
        arr.push(i);
      }
    }
  }
  return arr;
}

console.log(findAnagrams("cbaebabacdabc", "abc"));

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

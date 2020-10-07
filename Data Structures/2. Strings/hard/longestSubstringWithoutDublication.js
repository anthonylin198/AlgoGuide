

// todo: O(n^2) time complexity -- looping throuhg array twice to check substring
function longestSubstringWithoutDuplication(string) {
  // store the longest substring
  let longestSubstring = '';
  // create outer for loop
  for (let i = 0; i < string.length; i++) {
    // create a cache
    let cache = {}
    cache[string[i]] = true;
    let innerString = string[i];
    // create inner for loop, that will continue until there is a matching character in the cache
    for (let j = i + 1; j < string.length; j++) {
      console.log(innerString)
      if (string[j] in cache) {
        console.log("hit")
        if (innerString.length > longestSubstring.length) longestSubstring = innerString;
        break;
      } else {
        cache[string[j]] = true;
        innerString += string[j];
      }
    }
    if (innerString.length > longestSubstring.length) longestSubstring = innerString;
  }

  return longestSubstring
}

// console.log(longestSubstringWithoutDuplication("abcdabcef"))



// todo: O(n) solution | O(min(n,a)) space
function longestSubstringWithoutDuplication(string) {
  const lastSeen = {};
  let longest = [0, 1];
  let startIdx = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in lastSeen) {
      startIdx = Math.max(startIdx, lastSeen[char] + 1);
    }
    if (longest[1] - longest[0] < i + 1 - startIdx) {
      longest = [startIdx, i + 1];
    }
    lastSeen[char] = i;
  }
  return string.slice(longest[0], longest[1])
}

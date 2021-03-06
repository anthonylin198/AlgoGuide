// Prompt: given a string an a pattern, find all anagrams of the pattern in the given string
// input: "pqsprqpq" , "pqr"
// output: [1, 2]
// explanation: the two anagrams of the pattern in the given string are "pq" and "qp"

/*

todo: Solution: check every window of length givenString.length. 
pqs: no   iF there is a single character in the subarray, not in the given string, then we need to move until startWindow is at the
-- each time hit a character that is not in the given string






*/

function find_string_anagrams2(str, pattern) {
  // store the characters in the pattern into an object
  // create array to store all values
  // keep track of start window
}

// write a function to return a list of starting indices of the anagrams of the pattern in the given string

function find_string_anagrams(str, pattern) {
  let windowStart = 0,
    matched = 0,
    charFrequency = {};

  // populating the object with the characters contained
  for (let i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  const resultIndices = [];
  // our goal is to match all hte characters from the 'charFrequency with the current window
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      // decrement the frequency of the matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }
  }

  if (matched === Object.keys(charFrequency).length) {
    resultIndices.push(windowStart);
  }

  // shrink the sliding window
  if (windowEnd >= pattern.length - 1) {
    leftChar = str[windowStart];
    windowStart += 1;
    if (leftChar in charFrequency) {
      if (charFrequency[leftchar] === 0) {
        matched -= 1;
      }
      charFrequency[leftChar] += 1;
    }
  }
  return resultIndices;
}

console.log(find_string_anagrams("ppqp", "pq"));
console.log(find_string_anagrams("abbcabc", "abc"));

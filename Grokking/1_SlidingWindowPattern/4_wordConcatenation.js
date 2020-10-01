// given a string an list of words, find all starting indices of substrings in the given string that are a concatenation of all given words exactly once without overlapping. All words are same length

// input: ("catfoxcat", ["cat", "fox"])
// Output: [0, 3]
// explanation: "catfox" and "foxcat"

// input: ("catcatfoxfox", ["cat, fox"])
// Output: [3]
// only substring containing both the words is "catfox"


// ! my approach: would be finding every possible combination of the array, and store in the object. then run through the input string and see if it exists




// ! Sliding window approach
function find_word_concatenation(str, words) {
  // edge case
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }

  const wordFrequency = {};

  words.forEach((word) => {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word] += 1;
  })

  const resultIndices = [],
    wordsCount = words.length;
  wordLength = words[0].length;

  // then we iterate through the actual word
  for (let i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
    const wordsSeen = {};
    for (let j = 0; j < wordsCount; j++) {
      next_word_index = i + j * wordLength;
      // get the next word from the string
      word = str.substring(next_word_index, next_word_index + wordLength);
      if (!(word in wordFrequency)) {
        break;
      }

      // add the word to wordsseen map
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word] += 1;

      // no need to process further if the word has higher frequency than required
      if (wordsSeen[word] > (wordFrequency[word] || 0)) {
        break;
      }

      if (j + 1 === wordsCount) {
        resultIndices.push(i)
      }
    }
  }
  return resultIndices;
}

console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));

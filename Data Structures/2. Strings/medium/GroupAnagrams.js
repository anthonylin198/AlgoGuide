// todo: Iterate one word at a time, starting form first one compare ot the rest and add itself and other words if they are anagrams.





// todo: iterate through the array, keep a cache of words we have already seen, add key value pairs. EX: {"yo": [yo, oy]}

function groupAnagrams(words) {
  const cache = {};

  for (let i = 0; i < words.length; i++) {
    // get the sorted version of the word
    const sortedWord = words[i].split('').sort().join('');
    // check if it is in the cache if it is
    if (sortedWord in cache) {
      cache[sortedWord].push(words[i])
    } else {
      cache[sortedWord] = [words[i]]
    }
  }

  // return the values of the object
  return Object.values(cache)

}


console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]))
// write a function that takes in an array of strings and group anagrams together




function groupAnagrams(words) {
  // arr to push innerArrays to
  const arr = [];
  const wordCache = {}


  // ! outer for lopo to iterate through the array of words
  for (let i = 0; i < words.length; i++) {
    const cache = {};
    const innerArr = [];
    // iterate through the array, pushing the first in a cache then pushing through
    for (let j = 0; j < words[i].length; j++) {
      // put characters of the word into the cache
      if (!cache[words[i][j]]) {
        cache[words[i][j]] = 1;
      } else {
        cache[words[i][j]]++;
      }
    }

    // ! loop to iterate through the entire and compare the objects
    for (let j = i; j < words.length; j++) {
      // create the cache
      const innerCache = {};
      for (let k = 0; k < words[j].length; k++) {
        // if it is the first one, we need to set to 0
        if (!innerCache[words[j][k]]) {
          innerCache[words[j][k]] = 1;
        } else {
          innerCache[words[j][k]]++;
        }
      }
      // check if innerCache equals the cache, if so then push to the arr - we need to use another for in
      if (deepEqual(cache, innerCache) && !wordCache[words[j]]) {
        innerArr.push(words[j])
        wordCache[words[j]] = true;
      }
    }
    // push to the arr
    if (innerArr.length) {
      arr.push(innerArr)
    }
  }
  return arr
}


// helper function to check of objects are equal to each other
function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}





console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]))
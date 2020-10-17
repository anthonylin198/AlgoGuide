// given an array of integers, each integer represents a jump of its value

// single cycle occurs if starting at any index in the array following jumps, every element is visited exactly once before landing on starting index.

const array = [2, 3, 1, -4, -4, 2]; // outputs true

// 2, 1, -4, 2, 3, -4  ---> 2, 1, -4, 2, 3, -4

const array2 = [2, 1, 1, 2, 1]; // output false, because would skip the ones

// keep a hashtable for every value that we pass - the index for the value
// {0: true, 2: true, 3: true, arr.length - 1: true, 1: true, 4: true} -- check return if Object.keys(obj).length === arr.length

// {0: true, 2: true, 3: true, } // after 5 iterations, the Object.keys(obj).length is still 3, so this would return false

// Storing values into the object: O(n)
// Object.keys(cache).length: O(n)    --- 2O(n) every time

// small optimizations: the moment we hit a repeating index while adding to the cache, we exit

function hasSingleCycle(array) {
  // declare an object that will store the indices that have been passed in
  const cache = {};
  // pointer variable to keep track of the index
  let index = 0;
  // counter variable to exit out after the length of array
  let counter = 0;
  // while loop iterating through the array until counter hits
  while (counter < array.length) {
    // add the pointer value to the cache
    cache[index] = true;
    // change the value of the pointer, based on the value in the array - this must include wraparound functionality
    index = getIndex(arr, index);
    // increment the counter
    counter++;
  }

  return array.length === Object.keys(obj).length;
}

function getNextIndex(arr, index) {}

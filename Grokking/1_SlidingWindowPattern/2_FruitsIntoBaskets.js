// Prompt: 2 baskets, and maximize fruits in each basket. each basket can only have one type of fruit. You stop when you pick from a 3rd fruit type

// input: Fruit=['A','B','C', 'A', 'C']
// output: 3
// explanation ['C', 'A', 'C']

/*

Start from index 0, and keep a cache that will store each type of frit and the number of times they appear. Continue to check Object.keys.length, if we hit a lenght of 3, then return fruit

Next start from B, then start from C etc... (Time Complexit: O(n^2)), Space complexity: O(n)


Keep a cache, keep a counter for total number of fruit





We are repeating some steps: Keep a sliding window

[A]     counter = 1

AB      counter = 2

ABC     3 Keys

BC      counter = 2


BCA    3 Keys


CA      counter = 2

CAC    counter = 3


We can do this with a single pass solution - O(N) time complexity         O(K) K is the number of keys inside the fruit array - space

*/

function myFruit(arr) {
  // keep cache to keep track of fruit
  const cache = {};
  // create a counter that will be incremented and decremeneted as new fruit are added
  let max = 0;
  // keep track of start window
  let startWindow = 0;
  // create a loop to iterate through array from i = 0
  for (let endWindow = 0; endWindow < arr.length; endWindow++) {
    if (!cache[arr[endWindow]]) {
      cache[arr[endWindow]] = 1;
    } else {
      cache[arr[endWindow]]++;
    }
    // while Object.keys(cache).length === 3, slide over the start window until the keys is back to 0
    while (Object.keys(cache).length === 3) {
      // remove value from cache
      cache[arr[startWindow]]--;
      if (cache[arr[startWindow]] === 0) {
        delete cache[arr[startWindow]];
      }
      // increment startWindow by 1
      startWindow++;
    }
    max = Math.max(endWindow - startWindow + 1, max);
    console.log(max);
  }
  return max;
}

console.log("this", myFruit(["A", "B", "C", "A", "C"]));

// Approach: Brute force. This will get us an O(n^2)
function fruit(arr) {
  let fruitCounter = 0;
  // create a for loop to iterate through the array from i = 0
  for (let i = 0; i < arr.length; i++) {
    let innerCounter = 0;
    const obj = {};
    // create a nested for loop that will start from i, and end at the length of the array
    for (let j = i; j < arr.length; j++) {
      // add the fruit tree to the obj
      obj[arr[j]] = true;
      // if the object length is not greater than 2, then add to fruit counter
      if (Object.keys(obj).length <= 2) {
        innerCounter++;
      }
    }
    if (innerCounter > fruitCounter) fruitCounter = innerCounter;
  }
  return fruitCounter;
}

// console.log(fruit(['A', 'B', 'C', 'A', 'C']))

// Approach: Sliding window, then we move along loop one time, deleting the previous, and adding the next

function fruit2(fruits) {
  let windowStart = 0,
    maxLength = 0,
    fruitFrequency = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitFrequency)) {
      fruitFrequency[rightFruit] = 0;
    }
    fruitFrequency[rightFruit] += 1;

    // shrink the sliding window, until we are left with '2' fruits in the fruit frequency
    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart];
      fruitFrequency[leftFruit] -= 1;
      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
      }
      windowStart += 1; // shrink the window
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

// console.log(fruit2(["A", "B", "C", "A", "C"]));

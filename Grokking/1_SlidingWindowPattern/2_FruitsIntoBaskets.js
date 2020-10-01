// Prompt: 2 baskets, and maximize fruits in each basket. each basket can only have one type of fruit. You stop when you pick from a 3rd fruit type

// input: Fruit=['A','B','C', 'A', 'C']
// output: 3
// explanation ['C', 'A', 'C']



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
        innerCounter++
      }
    }
    if (innerCounter > fruitCounter) fruitCounter = innerCounter
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
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength;

}


console.log(fruit2(['A', 'B', 'C', 'A', 'C']))
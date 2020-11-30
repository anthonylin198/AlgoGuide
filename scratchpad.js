/*


wirte a function that takes an array of positive integers, returns number of sets of 3 which sum <= threshold

[1,2,3,4] , 7   returns 2 , 1,2,3 and 1,2,4


[4,1,3,2]

[4,1,3]
[4,1,2]
[4,1,3]
[4,1,2]
...
...
...

*/

/*




*/

// array [4,1,3,2]
//! Brute force solution : O(n ^ 3) time O(1) space
function countSetsOfThree(numbers, threshold) {
  let counter = 0;
  for (let i = 0; i < numbers.length - 2; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] <= threshold) {
          counter++;
        }
      }
    }
  }
  return counter;
}

// console.log(countSetsOfThree([4, 1, 3, 2], 7));

/*

1  2  3  4
i  p1    p2


["apple", "orange","asddsf"]




*/

//! Sorted Technique: If we use sort and sliding window, we can achieve O(n^2) time by combining with the 2 pointer approach
function countSetsOfThree2(numbers, threshold) {
  // sorted method
  let sortedList = numbers.sort((a, b) => {
    return a - b;
  }); // O(nlogn) --- quick sort
  let counter = 0;
  for (let i = 0; i < sortedList.length; i++) {
    let p1 = i + 1;
    let p2 = sortedList.length - 1;
    while (p1 < p2) {
      const currentSum = sortedList[i] + sortedList[p1] + sortedList[p2];
      if (currentSum >= threshold) {
        if (currentSum === threshold) counter++;
        p2--;
      } else {
        counter++;
        p1++;
      }
    }
  }
  return counter;
}

console.log("new", countSetsOfThree2([4, 1, 2, 3, 1, 20, 125], 7));

/*
[1,1,2,3,4,]

1,1,2
1,1,3
1,1,4
1,2,3
1,2,4




*/

function minIndex(array) {
  minIndex = -1;
  minValue = 0;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] < minValue || minIndex === -1) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
}

console.log(minIndex([1, 2, 3, 4, 5]));





params = {'first' => 32, 'alt' => 'last&val'}
x = 'https://website.com'
x = x + '?' + params.to_Query


console.log(x)

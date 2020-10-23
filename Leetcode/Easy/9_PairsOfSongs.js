/*

In a list of songs, the i-th song has a duration of time[i] seconds. 

Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

Input: [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60


Input: [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.



*/

/*

todo: Have 2 pointers, iterating through and checking every combination of 2 pairs, and if satisfies our condition, we add one to our counter - O(n^2)
[30,20,150,100,40]

[30, 20]
[30, 150]
[30, 100]
[30, 40]


[20,150]
[20,100]
[20,40]

....

[100, 40]


Thinks of a pattern to see if a number is divisible by 60


*/

// solution
function numPairsDivisibleBy60(time) {
  let counter = 0;
  for (let i = 0; i < time.length - 1; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) {
        counter++;
      }
    }
  }

  return counter;
}

// hashmap solution
var numPairsDivisibleBy60 = function (time) {
  let hashMap = new Array(60).fill(0);
  let c = 0;
  for (let i = 0; i < time.length; i++) {
    let val = time[i] % 60;
    c += hashMap[(60 - val) % 60];
    hashMap[val] += 1;
  }
  return c;
};

const numPairsDivisibleBy602 = function (time) {
  const obj = {};
  let counter = 0;
  for (let i = 0; i < time.length; i++) {
    // keep track of each remainder
    let remainder = time[i] % 60;
    targetRemainder = 60 - remainder;
    // check if is in the obj, then counter++
    if (targetRemainder in obj) {
      counter++;
    }
    obj[targetRemainder] = true;
    console.log(obj);
  }
  return counter;
};

// test case of [60, 60, 60]
console.log(numPairsDivisibleBy602([60, 60, 60]));

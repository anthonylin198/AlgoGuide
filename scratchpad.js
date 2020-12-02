function countSetsOfThree(numbers, threshold) {
  // sorted method
  let sortedList = numbers.sort((a, b) => {
    return a - b;
  });
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

console.log(countSetsOfThree([1, 2, 3, 4], 7));
console.log(countSetsOfThree([1], 7));
console.log(countSetsOfThree([4, 1, 3, 2], 7));
console.log(countSetsOfThree([1, 2, 3, 9], 7));
console.log(countSetsOfThree([2, 2, 2, 2], 7));
console.log(countSetsOfThree([3, 3, 3, 3], 7));
console.log(countSetsOfThree([1, 2, 3, 4, 5], 7));

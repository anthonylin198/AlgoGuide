// Prompt: Write a function that takes in an array of poistive integers and returns the maximum sum of non-adjacent elemnts in the array.
// if a sum can't be generated, the function should return 0

// input: [75,105,120,75,90,135]
// output: 330 (75+120+135)


// [7,10,12,7,9,14]
// Output: 7 + 12 + 14 = 33

// we can solve this using dynamic programming, breaking down this question into smaller pieces
// [7, 10, 19, 19, 28, 33]: we would return the largest

// pattern after the first 2 numbers, Math.max(currentNum + num[i-2], num - 1)

// after iterating through the array, we return hte last number

// todo: Max subset no adjacent: we can iterate through the array, always need to check if a certain number is worth it, compared to adding the 2 together
// todo: example is if we have index 1 and 3, but index 2 is greater than both of thse combined, we woudl opt for that
// todo: start off taking 


// array: [7, 10, 12, 7, 9, 14]
// do checks if to take firs and third number, or if it is better to take the second number - and continuously do this with dynamic programming
// array: [7, 10, (check 19 ) 19, (check 17 vs 19) 19, -- return the last number ]
function maxSubsetSumNoAdjacent(array) {
  // edge case, if the array has no length
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  // create an array that we will push values to as we iterate through the array
  const dynamicArr = array.slice()
  dynamicArr[1] = Math.max(array[0], array[1]) // for some reason we need to do this
  // create for loop to iterate through the array, and add value based off the best case scenario (typic)
  for (let i = 2; i < array.length; i++) {
    // take the maximum off array[i] + array[i - 2] versus dynamicArr[i - 1]
    dynamicArr[i] = Math.max(dynamicArr[i] + dynamicArr[i - 2], dynamicArr[i - 1])
    console.log(dynamicArr)
  }
  return dynamicArr[dynamicArr.length - 1]
}


console.log(maxSubsetSumNoAdjacent([30, 25, 50, 55, 100, 120]))








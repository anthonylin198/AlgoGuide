// given a non-empty array of integers, write a function that determines whether the second array is a subsequence of the first one.

// the numbers [1,3,4] forms subsequence of array [1,2,3,4], and so do the numbers [2,4]


// input: array = [5,1,22,25,6,-1,8,10] sequence = [1,6,-1,10]
// output: true


// Solution: Start from beginning of the sequence, and iterate through the array. Everytime there is a match in the array, go to the next number
function isValidSubsequence(array, sequence) {
  // declare variable to keep track of sequence index
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    // check if the index is equal to after checking the equality
    if (index === sequence.length) {
      return true;
    }
    if (array[i] === sequence[index]) index++;
  }
  return false
}



const arr = [1, 2, 3, 4, 5]
console.log(arr.length)
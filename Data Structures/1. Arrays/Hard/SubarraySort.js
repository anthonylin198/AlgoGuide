// write a function that takes in an array of at least two integers and that returns an array of the starting and ending indices of the smallest subarray in the input array


// find the first number that is out of order, then check to its left, adn check to the right - o(n^2)
function subarraySort(array) {
  // create a for loop to iterate through the array
  for (let i = 0; i < array.length; i++) {
    // check if a number is out of order, if the number is out of order, we continue -- we just check if it is less than the previous number
    // keep track of the least value an
    if (array[i] < array[i - 1]) {
      console.log(i)
      // check to the left of the number: extend until we reach a number that we are less than or equal to
      let leftIndex = i - 1;
      while (array[leftIndex] > array[i] && leftIndex >= 0) {
        leftIndex--;
      }

      // check to the right on the number: extend until we reach a number that we are greater than
      let rightIndex = i;
      while (array[rightIndex] < array[i] && rightIndex <= array.length) {
        rightIndex++
      }
      i = rightIndex;

      return [leftIndex, rightIndex]
    }
  }
  // if we make it all the way out, then we return
  return [-1, -1];
}

const array = [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57]

console.log(subarraySort(array))
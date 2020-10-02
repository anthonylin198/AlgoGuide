// Prompt: Given an array of numbers in ascending order, find the ceiling of a given number 'key'.
// The ceiling of the 'key' will be the smallest element in the given array greater than or equal to the key.
// Write a function to return index of ceiling of the 'key'. If there isn't any ceiling, return one.


function search_floor_of_a_number(arr, key) {
  if (key < arr[0]) { // if the 'key' is smaller than the smallest element
    return -1;
  }
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2); // get the middle
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else { // found the key
      return mid;
    }
  }
  // since the loop is running until 'start <= end', so at the end of the while loop, 'sta
  // we are not able to find the element in the given array, so the next smaller number wi
  return end;
}
console.log(search_floor_of_a_number([4, 6, 10], 6));
console.log(search_floor_of_a_number([1, 3, 8, 10, 15], 12));
console.log(search_floor_of_a_number([4, 6, 10], 17));
console.log(search_floor_of_a_number([4, 6, 10], -1));
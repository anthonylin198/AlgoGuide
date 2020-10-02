// Prompt: Given sorted array of numbers, find if a given number 'key' is present in the array. Though we know that the aray is sorted,
// we don't know assending or descending. Assum there may be duplicates

// ! Use binary search when we have a sorted array looking for specific character

// Write a function to return the index of the 'key' if it is present in the array

// Input: [4,6,10] key = 10
// Output: 2 - 10 is at index 2


// Time Complexit: O(logN)
function binary_search(arr, key) {
  let start = 0;
  end = arr.length - 1;
  isAscending = arr[start] < arr[end]; // determine if isAscending or isDescending

  while (start <= end) {
    // calculate the middle of the current range 
    let mid = Math.floor(start + (end - start) / 2);
    if (key === arr[mid]) {
      return mid;
    }
    if (isAscending) { // ascending order
      if (key < arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else { // key > arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    } else { // descending order
      if (key > arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else { // key < arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    }
  }

  return -1; // element not found 
}

console.log(binary_search([4, 6, 10], 10));
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5));
console.log(binary_search([10, 6, 4], 10));
console.log(binary_search([10, 6, 4], 4));
// Given an array of numbers sorted in ascending order, find the element in the array that has minimum difference with the given 'key'
// input: [4, 6, 10], key = 7


// ! brute force: iterate through the array, and use math.abs on each difference, and keep track of the least. this would be O(n)




//! Using binary search to simplify this to O(log)n
// Time complexity is O(logN)
function search_min_diff_element(arr, key) {
  // if key is less than arr[0], we know we need to just return the least
  if (key < arr[0]) {
    return arr[0];
  }
  // check if it greater than the end
  const n = arr.length;
  if (key > arr[n - 1]) {
    return arr[n - 1];
  }

  let start = 0;
  let end = n - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      return arr[mid];
    }
  }
  // at the end of the while loop, 'start === end+1'
  // we are not able to find the element in the given array // return the element which is closest to the 'key'
  if ((arr[start] - key) < (key - arr[end])) {
    return arr[start];
  }
  return arr[end];
}
console.log(search_min_diff_element([4, 6, 10], 7));
console.log(search_min_diff_element([4, 6, 10], 4));
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12));
console.log(search_min_diff_element([4, 6, 10], 17));
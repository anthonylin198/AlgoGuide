// Prompt: Given an array containing positive and negative numbers. If reach the end of array, jump back to start.

// Input: [1, 2, -1, 2, 2]
// Output: true
// Explanation: [0, 1, 3, 0]

// Do the 2 pointer approach, if they ever meet up, then we know that they are
// time complexity is O(N^2) -- Space complexity is O(1)

function circular_array_loop_exists(arr) {
  for (i = 0; i < arr.length; i++) {
    isForward = arr[i] >= 0; // if we are moving forward or not
    let slow = i,
      fast = i;
    // if slow or fast becomes '-1' this means we can't find cycle for this number
    while (true) {
      // move one step for slow pointer
      slow = find_next_index(arr, isForward, slow);
      // move one step for fast pointer
      fast = find_next_index(arr, isForward, fast); if (fast !== -1) {
        // move another step for the fast pointer
        fast = find_next_index(arr, isForward, fast);
      }
      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }
    if (slow !== -1 && slow === fast) {
      return true;
    }
  }
  return false;
}

function find_next_index(arr, isForward, currentIndex) {
  direction = arr[currentIndex] >= 0;
  if (isForward !== direction) {
    return -1; // change in direction, return -1
  }
  nextIndex = (currentIndex + arr[currentIndex]) % arr.length; if (nextIndex < 0) {
    nextIndex += arr.length; // wrap around for negative numbers }
    // one element cycle, return -1 if (nextIndex === currentIndex) {
    nextIndex = -1;
  }
  return nextIndex;
}


console.log(circular_array_loop_exists([1, 2, -1, 2, 2]));
console.log(circular_array_loop_exists([2, 2, -1, 2]));
console.log(circular_array_loop_exists([2, 1, -1, -2]));




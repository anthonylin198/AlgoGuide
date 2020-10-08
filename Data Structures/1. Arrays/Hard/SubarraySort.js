
// Subarray Sort: We need to sort the middle section the is not in order - maybe findn first incorrect from right, then first incorrect from left

// whenever you got 1 number not in sorted order, then you got 2 - then we can find the furthes left index it has to be

// ! Not complete, but somewhat close

// keep track of max left index and max right index
// todo: iterate through array and keep track of the max index, where something is out of place, and check all the way left of that to see where it needs to go
// todo: need to think of a few more cases

// todo: 2 pointer approach, check form left side and go once -- then check from the right side and go once
function subarraySort(array) {
  let minLeftIdx = Infinity;
  let maxRightIdx = -Infinity;
  // for loop to iterate through the array, and identify every wrong index, and keep checking where it needs to be placed left
  for (let i = 1; i < array.length; i++) {
    console.log("left", minLeftIdx);
    console.log(maxRightIdx);
    // check if the number is out of place - if it is iterate left and compare minLeftIdx, and update maxRightIdx each time
    if (array[i] - array[i - 1] < 0) {
      maxRightIdx = i;
      // while loop to find where it would be in the correct spot to put it to the left
      let findLeftIdx = i - 1;
      while (array[findLeftIdx] > array[i]) {
        findLeftIdx--;
      }
      if (findLeftIdx < minLeftIdx) {
        minLeftIdx = findLeftIdx;
      }
    }
  }

  if (maxLeftIdx === Infinity) {
    return [-1, -1]
  }
  return [minLeftIdx + 1, maxRightIdx];
}

const arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];

console.log(subarraySort(arr))
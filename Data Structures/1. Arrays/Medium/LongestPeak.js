// write a function that takes in an array of integers and returns the longest length of the peak


// 1, 4, 10, 10, 4, 1

// find the longest peak - must be strictly increasing or decreasing

// function longestPeak(arr) {
//   // keep track to check if increasing, then decreasing
//   let longestPeakLength = 0;
//   let i = 1;
//   while (i < arr.length - 1) {
//     const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
//     if (!isPeak) {
//       i++;
//       continue;
//     }

//     let leftIdx = i - 2;
//     while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
//       leftIdx--;
//     }
//     let rightIdx = i + 2;
//     while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
//       rightIdx++
//     }

//     const currentPeakLength = rightIdx - leftIdx - 1;
//     longestPeakLength = Math.max(longestPeakLength, currentPeakLength)
//   }

//   return longestPeakLength;



// }


function longestPeak(arr) {
  // keep track of the longest peak
  let longestPeakLength = 0;
  // create for loop to iterate through the array: first identify the peak, then check the length of that peak
  for (let i = 1; i < arr.length; i++) {
    // check if it is a peak
    const isPeak = arr[i - 1] < arr[i] && arr[i + 1] < arr[i]
    if (!isPeak) {
      continue;
    }
    // if it is a peak, then we need count how long the peak is
    let leftSide = i - 2;
    while (leftSide >= 0 && arr[leftSide] < arr[leftSide + 1]) {
      leftSide--;
    }
    // check the right side of the peak
    let rightSide = i + 2;
    while (rightSide <= arr.length && arr[rightSide] < arr[rightSide - 1]) {
      rightSide++;
    }

    const currentPeakLength = rightSide - leftSide - 1
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength)
    i = rightSide - 1
  }
  return longestPeakLength;
}


const arr = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

console.log(longestPeak(arr))
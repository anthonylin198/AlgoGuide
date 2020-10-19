// Prompt: give an array of unsorted umbers and a target number, find all unique quadruplets that sum ot target
// input: [4, 1, 2, -1, 1, -3], 1
// output: [-3, -1, 1, 4], [-3, 1, 1, 2]

/*

Brute Force Solution: Go through every group of 4 numbers using nested for loop. pushing combinations that work out. O(n^4) time O(1) space

4,1,2,-1
4,1,2,1
4,1,2,-3

1,2,-1,1
1,2,-1,-3

2,-1,1,-3



Sorted solution using 2 pointer approach: Sort the array, nested for loops, then do a 2 pointer approach and solve remaining like 2sum problem


[-3, -1, 1, 1, 2, 4]


-3, -1, 1, 4     push the value

-3, -1, 2, 1

-3, -1, 2, 1



-3, 1, 1, 4
-3, 1, 1, 2



*/

// time complexit O(nlogn) + O(n^2) + O(n) = O(n)^2 time complexity         O(n) space complexity
function mySearchQuadruplets(arr, target) {
  const quadArr = [];
  arr.sort((a, b) => a - b);
  // outer for loop starting at i = 0 and ending at arr.length - 3
  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      let leftPointer = j + 1;
      let rightPointer = arr.length - 1;
      while (leftPointer < rightPointer) {
        let currentSum = arr[i] + arr[j] + arr[leftPointer] + arr[rightPointer];
        if (currentSum < target) leftPointer++;
        else if (currentSum > target) rightPointer--;
        else {
          quadArr.push([arr[i], arr[j], arr[leftPointer], arr[rightPointer]]);
          rightPointer--;
        }
      }
    }
  }
  return quadArr;
}

console.log("here", mySearchQuadruplets([4, 1, 2, -1, 1, -3], 1));

// function search_quadruplets(arr, target) {
//   arr.sort((a, b) => a - b);
//   const quadruplets = [];
//   for (let i = 0; i < arr.length - 3; i++) {
//     // skip same element to avoid duplicate quadruplets
//     if (i > 0 && arr[i] === arr[i - 1]) {
//       continue;
//     }
//     for (let j = i + 1; j < arr.length - 2; j++) {
//       // skip same element to avoid duplicate quadruplets
//       if (j > i + 1 && arr[j] === arr[j - 1]) {
//         continue;
//       }
//       search_pairs(arr, target, i, j, quadruplets);
//     }
//   }
//   return quadruplets;
// }

// search pairs uses the 2 pointer approach
// function search_pairs(arr, targetSum, first, second, quadruplets) {
//   let left = second + 1,
//     right = arr.length - 1;
//   while (left < right) {
//     sum = arr[first] + arr[second] + arr[left] + arr[right];
//     if (sum === targetSum) {
//       // found the quadruplet
//       quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
//       left += 1;
//       right -= 1;
//       while (left < right && arr[left] === arr[left - 1]) {
//         left += 1; // skip same element to avoid duplicate quadruplets
//       }
//       while (left < right && arr[right] === arr[right + 1]) {
//         right -= 1; // skip same element to avoid duplicate quadruplets
//       }
//     } else if (sum < targetSum) {
//       left += 1; // we need a pair with a bigger sum
//     } else {
//       right -= 1; // we need a pair with a smaller sum }
//     }
//   }
// }
// console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));

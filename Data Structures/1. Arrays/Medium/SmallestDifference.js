// write a function that takes in 2 non empty arrays of integers. Finds the pairs, one from each array.
// whose absolute value is closet to 0. Returns an array containing those 2 numbers
// assume only one parit with smallest difference.



// ! brute force: iterate starting from first array, check difference of second array O(n) * O(m) time brute force




// ! sort both of the arrays and implement a 2 pointer approach. O(n) + O(m)

// input: 2 arrays
// output: [1, 2] -- the numbers that would create the smallest difference
// function smallestDifference(arr1, arr2) {
//   // sort arr1 and arr 2
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);

//   // implement 2 pointer approach, starting from beginning of arr1, and end of arr2
//   let idxOne = 0;
//   let idxTwo = 0;
//   let smallest = -Infinity;
//   let current = Infinity;
//   let smallestPair = [];

//   while (idxOne < arr1.length && idxTwo < arr2.length) {
//     let firstNum = arr1[idxOne];
//     let secondNum = arr2[idxTwo];
//     // checks
//     if (firstNum < secondNum) {
//       current = secondNum - firstNum;
//       idxOne++;
//     } else if (secondNum < firstNum) {
//       current = firstNum - secondNum;
//       idxTwo++;
//     } else {
//       return [firstNum, secondNum];
//     }

//     if (current < smallest) {
//       smallest = current;
//       smallestPair = [firstNum, secondNum]
//     }

//     return smallestPair
//   }
// }


// first sort both arrays, then we cna solve in O(logn) with the 2 pointer approach
function smallestDifference(arr1, arr2) {
  // sort arr1 and arr2
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  // keep track if indexes in first and secon array
  idxOne = 0;
  idxTwo = 0;
  // keep track of the smallest value
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];

  // create a while loop to iterate through - we will be able to skip those that are way off
  while (idxOne < arr1.length && idxTwo < arr2.length) {
    // get the current sum
    let numberOne = arr[idxOne];
    let numberTwo = arr[idxTwo];

    // if number one is greater than numbertwo, then we increment by one
    if (numberOne > numberTwo) {
      current = numberOne - numberTwo;
      idxTwo++;
    } else if (numberTwo > numberOne) {
      current = numberTwo - numberOne;
      idxOne++
    } else {
      return [numberOne, numberTwo];
    }

    // if it is closer than the current sum, then we can switch minimum
    if (current < smallest) {
      smallest = current
      smallestPair = [numberOne, numberTwo]
    }
  }
  return smallestPair;
}
// given an array of integers and an integer, write a function that moves all instances of that integer
// to the end then returns the array


// ! Brute force would be to just delete the value in the array, then push it to the end






// ! more efficient solution: sort the array, then can just do one single block movement




// ! directly swap the values from within the array

function moveElementToEnd(arr, num) {
  // keep track of the index in the array, as well as the end of the array
  let i = 0;
  let j = arr.length - 1;
  // create a while loop, while i is less than j
  while (i < j) {
    // check from the end
    while (i < j && arr[j] === num) j--;
    if (arr[i] === num) swap(i, j, arr);
    i++
  }
}

// swap function
function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
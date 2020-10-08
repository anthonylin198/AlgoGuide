// takes in an array of integers and returns sorted version of that array with bubble sort


// todo: create a variable to check false, then use a while loop that changes variable to true, but if something is out of order changes to false and will run again
function bubbleSort(array) {
  // create variable to check if it is sorted
  let isSorted = false;

  // create while loop
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
  }
  return array;
}

// create helper function to swap values in array

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
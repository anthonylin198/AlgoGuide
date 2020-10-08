// todo: Sort by iterating through, and placing to the left where the value needs to go

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) { // keep swapping to the left as long as j is > 0 and array[j] is less than array[j - 1]
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j]
  array[j] = temp;
}
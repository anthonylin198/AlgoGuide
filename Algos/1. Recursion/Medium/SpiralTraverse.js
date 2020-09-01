// ! Write a function that takes in an n * m 2 dimensional array, returns one-dimensions of all elements in spiral order
// ! Starts from the top left, and keeps cycling through until every element has been visited

// arrays are of equal length. We need to keep track of how many arrays are inside the array

function spiralTraverse(array) {
  // create an array - we will push our one dimensional array here
  const arr = [];
  // create the recursive algorithm to do this
  (function generate(iteration = 0) {
    if (iteration >= array.length - 1) return;
    // top
    for (let j = 0 + iteration; j < array[iteration].length - 1 - iteration; j++) {
      arr.push(array[iteration][j]);
    }
    // right side
    for (let j = 0 + iteration; j < array.length - 1 - iteration; j++) {
      arr.push(array[j][array[iteration].length - 1 - iteration]);
    }
    // bottom
    for (let j = array[iteration].length - 1 - iteration; j > 0 + iteration; j--) {
      arr.push(array[array.length - 1 - iteration][j]); // this will be - 1 - 1 each
    }
    // left side
    for (let j = array.length - 1 - iteration; j > 0 + iteration; j--) {
      arr.push(array[j][iteration]);
    }
    generate(++iteration);
  })();
  return arr;
}

const array =
  [
    [4, 2, 3, 6, 7, 8, 1, 9, 5, 10],
    [12, 19, 15, 16, 20, 18, 13, 17, 11, 14]
  ]


console.log(spiralTraverse(array));

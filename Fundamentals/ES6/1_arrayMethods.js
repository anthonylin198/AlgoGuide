const arr = ["string1", "string2", "string3", "string4", "string5", "string6"];
console.log(arr);

// todo: Removing or adding last element of an array - O(n) operation
arr.pop(); // removes and returns string6
console.log(arr);

arr.push();
console.log(arr);

// todo: Removing or adding the first element of an array - O(n) because we must reindex all the elements
arr.shift(); // removes and returns the first lement of the array
console.log(arr);

arr.unshift("String0");
console.log(arr);

// todo: Slicing and splicing
arr.splice(2, 1, "Lemon", "Kiwi"); // At index 2 remove 1 element and add in lemon and kiwi. This returns the removed elements. This actually removes from the array
console.log(arr);

const slicedArr = arr.slice(3, 5); // creates a new array, does not remove any elements from the source array. From index 3, and not including index 5
console.log(slicedArr);
console.log(arr);

// todo: Merging arrays: Concat does not change existing arrays always returns a new array
const concatArr = arr.concat(slicedArr); // takes in any number of arguments
console.log(concatArr);

// todo: Sort - Directly manipulates the array - (O(N log N)
const numberArr = [5, 4, 3, 2, 1];
numberArr.sort((a, b) => a - b);
console.log(numberArr);

// todo: reversing an array - Changes directly - O(n)  time complexity
numberArr.reverse();
console.log(numberArr);

//! deleting in array leaves undefined, so stick with using splice, pop, or shift

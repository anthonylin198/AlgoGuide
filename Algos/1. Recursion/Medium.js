// Todo 1 (Medium): Write a function that tkes in an array of unique integers and returns its powersets
// ! TAKEAWAYS:
// ? Solution 1: Time Complexity O(N) and Space Complexity O(N)
function powerset(array, idx = null) {
  if (idx == null) {
    idx = array.length - 1;
  }
  if (idx < 0) {
    return [[]];
  }
  const ele = array[idx];
  const subsets = powerset(array, idx - 1); // recursive call
  const length = subsets.length;
  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i];
    subsets.push(currentSubset.concat(ele));
  }
  return subsets; // after the for loop finishes we hit subsets
}

// console.log("this is it ", powerset([1, 2, 3, 4]));

// ! iterative solution -- we must use the length to track
function powerset2(array) {
  const subsets = [[]];
  // for every element in the array
  for (const ele of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele));
    }
  }
  return subsets;
}

// console.log(powerset2([1, 2, 3]));

function powerset3(array) {
  const subsets = [[]];
  for (const ele of array) {
    const length = subsets.length; // length changes after every inner
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele));
    }
  }

  return subsets;
}

// console.log(powerset3([1, 2, 3]));

// Todo 1 (Medium): Write a function that takes in a special array and returns its product sum. The product sum of a "special" array is the sum of its elements
// ! TAKEAWAYS:
// ? Solution 1: Time Complexity O(N) and Space Complexity O(N)

function productSum(array, multiplier = 1) {
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1); // can't use ++multiplier here
    } else {
      sum += element;
    }
  }
  return sum * multiplier;
}

// console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));

function productSum2(array) {
  let sum = 0;
  const sumHelp = (array, multiplier = 1) => {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        sumHelp(array[i], (multiplier + 1) * multiplier); // we need to edit the multiplier in this case
      } else {
        sum += multiplier * array[i];
      }
    }
  };

  sumHelp(array);
  return sum;
}

// console.log(productSum2([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));

function getPermutations(array) {
  const perm = [];

  const permHelper = (array) => {
    // just have on change on each
  };
  permHelper();
  return perm;
}

// console.log(getPermutations([1, 2, 3]));

// ! Marcus HHT example -- not going through array just using a string
function htPermutations(m, n) {
  const result = [];
  heads = m;
  tails = n;
  // iffy - immediately invoked
  (function generate(str = "", m = heads, n = tails) {
    if (m === 0 && n === 0) return result.push(str);
    // take head
    if (m > 0) generate(str + "H", m - 1, n);
    // take tail
    if (n > 0) generate(str + "T", m, n - 1);
  })();

  return result;
}

console.log(htPermutations(1, 2));

//! Marcus example
function partitionNumber(num) {
  const result = [];
  const current = [];

  (function generate(count = 1, target = num) {
    if (target === 0) {
      return result.push(current.slice());
    }
    if (target < count) {
      return;
    }
    // take it
    current.push(count);
    generate(count, target - count);

    // leave it
    current.pop();
    generate(count + 1, target);
  })();

  return result;
}

console.log(partitionNumber(4));

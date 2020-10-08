

// todo: create all subsets, start off with empty -- iterative approach - both O(n*2^n) time and same space -- get very comfortable with concat
function powerset(array) {
  const subsets = [[]];
  for (const ele of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele))
    }
  }
  return subsets
}

console.log(powerset([1, 2, 3]))




// todo: recursive solutoin
function powerset(array, idx = null) {
  if (idx === null) {
    idx = array.length - 1;
  }
  if (idx < 0) {
    return [[]];
  }
  const ele = array[idx];
  const subsets = powerset(array, idx - 1);
  const length = subsets.length;
  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i];
    subsets.push(currentSubset.concat(ele));
  }
  return subsets
}
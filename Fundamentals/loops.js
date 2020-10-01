// for each, map, filter

const arr = [1, 2, 3, 4, 5];

// foreach executes on each element in the array
arr.forEach((num, index) => {
  return arr[index] = num * 2;
})

console.log(arr)



// map returns an actual array, with each executed on element
const doubled = arr.map((num, index) => {
  console.log(index)
  return num * 2
})

console.log(arr)
console.log(doubled)
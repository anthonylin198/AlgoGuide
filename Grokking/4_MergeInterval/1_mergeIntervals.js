// Given a list of intervals, merge all the overlapping intervals to product a list that has only mutuall exclusive intervals
// Input [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// since [1,4] and [2, 5] overlap, we merge them into [1, 5]

/*

sort all in order



All possible situations. a and b do not overlap, some parts of b overlap with a, a fully overlaps b

input: [[1, 4], [5, 9], [7, 12], [9, 10]]

output: [[1, 4], [5, 12], 7, 12]



1) Sort the range in order, based off the first number than the second number

2)  3 different situations. If and a b do not overlap, push. If some parts of b overlap with a, take first value of a, and last value of b. If fully overlap, take both


*/

// todo: using arrays
function mergeIntervals(arr) {
  const mergedIntervals = [];
  // sort the arrays in ascending order, from first number in the array. If they are equal, then sort based second val
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  console.log(arr);
  // keep track of the start and the end
  let start = arr[0][0];
  let end = arr[0][1];

  // create a for loop to iterate
  for (let i = 1; i < arr.length; i++) {
    const interval = arr[i];
    // if the start of the next interval is greater than the end of current, we can merge
    if (interval[0] <= end) {
      end = interval[1];
    } else {
      mergedIntervals.push([start, end]);
      start = interval[0];
      end = interval[1];
    }
  }
  // add last interval
  mergedIntervals.push([start, end]);
  return mergedIntervals;
}

const arr = [
  [1, 4],
  [2, 5],
  [7, 9],
];
console.log("this is merged", mergeIntervals(arr));

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }
//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }

// function merge(intervals) {
//   if (intervals.length < 2) {
//     return intervals;
//   }
//   // sort the intervals on the start time
//   intervals.sort((a, b) => a.start - b.start);

//   console.log(intervals)

//   const mergedIntervals = [];
//   let start = intervals[0].start;
//   let end = intervals[0].end;

//   for (i = 1; i < intervals.length; i++) {
//     const interval = intervals[i];
//     if (interval.start <= end) { // overlapping intervals, adjust the 'end'
//       end = Math.max(interval.end, end);
//     } else { // non-overlapping interval, add the previous interval and reset
//       mergedIntervals.push(new Interval(start, end)); start = interval.start;
//       end = interval.end;
//     }
//   }
//   // add the last interval
//   mergedIntervals.push(new Interval(start, end));
//   return mergedIntervals;
// }

// const first = new Interval(1, 4)
// const second = new Interval(2, 5)
// const third = new Interval(7, 9)
// console.log(merge([first, second, third]));

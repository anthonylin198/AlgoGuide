// Given a list of intervals, merge all the overlapping intervals to product a list that has only mutuall exclusive intervals
// Input [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// since [1,4] and [2, 5] overlap, we merge them into [1, 5]


class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

function merge(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  // sort the intervals on the start time 
  intervals.sort((a, b) => a.start - b.start);

  console.log(intervals)

  const mergedIntervals = [];
  let start = intervals[0].start,
    end = intervals[0].end;

  for (i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) { // overlapping intervals, adjust the 'end'
      end = Math.max(interval.end, end);
    } else { // non-overlapping interval, add the previous interval and reset
      mergedIntervals.push(new Interval(start, end)); start = interval.start;
      end = interval.end;
    }
  }
  // add the last interval 
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
}

const first = new Interval(1, 4)
const second = new Interval(2, 5)
const third = new Interval(7, 9)
console.log(merge([first, second, third]));
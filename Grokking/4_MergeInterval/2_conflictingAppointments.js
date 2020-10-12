// Prompt: given an array of intervals representing 'N' appointments, find out if a person can attend all the appointments

// input: [[1,4], [2,5], [7,9]]
// output: false
// sicne there is an overlap, person cannot attent one of these appointments


// input: [[1,2], [2,3], [3,4] , [4,5]]

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

function can_attend_all_appointments(intervals) {
  intervals.sort((a, b) => a.start - b.start); // always sort first, then we can jsut find intersections
  for (i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      // please note the comparison above, it is "<" and not "<="
      // while merging we needed "<=" comparison, as we will be merging the two
      // intervals having condition "intervals[i][start] === intervals[i - 1][end]" but // such intervals don't represent conflicting appointments as one starts right // after the other
      return false;
    }
  }
  return true;
}



console.log(`Can attend all appointments: ${can_attend_all_appointments([new Interval(1, 4),
new Interval(2, 5),
new Interval(7, 9),
])}`);
console.log(`Can attend all appointments: ${can_attend_all_appointments([new Interval(6, 7),
new Interval(2, 4),
new Interval(8, 12),
])}`);
console.log(`Can attend all appointments: ${can_attend_all_appointments([new Interval(4, 5),
new Interval(2, 3),
new Interval(3, 6),
])}`);


// ! WE ALSO NEED TO FIND ALL CONFLICTING APPOINTMENTS
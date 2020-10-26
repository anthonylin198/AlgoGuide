/*

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.



MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3



*/

/*

1 -> 2 -> 3 -> 4 -> 5

Make sure to really understand the question. MOving averrage of every 3 numbers.

You need to keep a queue to kee track of all of the values

KEEP TRACK OF THE QUEUE AND DO THE SLIDING WINDOW APPROACH


*/

// var MovingAverage = function(size) {
//   this.size = size;
//   this.queue = [];
//   this.res = 0;
// };
// MovingAverage.prototype.next = function(val) {
//   this.queue.push(val);
//   if(this.queue.length > this.size) {
//       this.res -= this.queue.shift();
//   }
//   this.res += val;
//   return this.res / this.queue.length;
// };

// ! ES6 Syntax
class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.res = 0;
  }
  next(val) {
    this.queue.push(val);
    if (this.queue.length > this.size) {
      this.res -= this.queue.shift();
    }
    this.res += val;
    return this.res / this.queue.length;
  }
}

class MovingAverage {
  constructor(val) {
    this.size = val;
    this.sum = 0;
    this.counter = 0;
  }
  next(val) {
    this.sum += val;
    this.counter++;
    return this.sum / this.counter;
  }
}

const m = new MovingAverage(3);

console.log(m);
m.next(3);
m.next(1);
m.next(10);
m.next(3);
m.next(5);
console.log(m);

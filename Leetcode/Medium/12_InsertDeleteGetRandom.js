/*

Implement the RandomizedSet class:

bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

*/

/*

Use a hashtable for set, inset the item and set and just set equal to true

*/

// todo: Your solution
class RandomizedSet {
  constructor(val) {
    this.set = {};
  }
  insert(val) {
    if (this.set[val]) {
      return false;
    } else {
      this.set[val] = true;
      return true;
    }
  }
  remove(val) {
    // if present, delete then return true
    if (this.set[val]) {
      delete this.set[val];
      return true;
    } else {
      return false;
    }
  }
  getRandom() {
    // get the number of values in the set
    const length = Object.keys(this.set).length;
    // keep track of a counter
    // generate random num
    let random = Math.floor(Math.random() * Math.floor(length));
    let counter = 0;
    // iterate through the hashtable
    for (let key in this.set) {
      if (counter === random) {
        return key;
      }
      counter++;
    }
  }
}

// todo: USe an array to keep track, because object.keys takes a while. Be able to just return math.random
var RandomizedSet = function () {
  this.map = {};
  this.nums = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map[val]) return false;
  this.nums.push(val);
  this.map[val] = this.nums.length;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map[val]) {
    var idx = this.map[val] - 1;
    this.map[this.nums[this.nums.length - 1]] = idx + 1;
    delete this.map[val];
    var tmp = this.nums[idx];
    this.nums[idx] = this.nums[this.nums.length - 1];
    this.nums[this.nums.length - 1] = tmp;
    this.nums.pop();
    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

const rs = new RandomizedSet();
console.log(rs.insert(1));
console.log(rs.remove(2));
console.log(rs.insert(2));
console.log(rs.getRandom());
console.log(rs.remove(1));
console.log(rs.insert(2));
console.log(rs.getRandom(3));

console.log(rs.set);

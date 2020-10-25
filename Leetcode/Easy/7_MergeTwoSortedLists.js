/*

Merge two sorted linked lists and return it as a new sorted list. New list should be made by splicing together the nodes of the first two lists

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: l1 = [], l2 = []
Output: []


Input: l1 = [], l2 = [0]
Output: [0]

*/

/*

HAVE TO KEEP TRACK TO VARIABLES AND MAKE SURE YOU ARE NOT LOSING LINKEDLIST

2 -> 6 -> 7 -> 8      1 -> 3 -> 4 -> 5 -> 9 -> 10

1 -> 2 -> 6 -> 7 -> 8













*/

// O(min(m, n)) time complexity, O(m, n) space
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }

  print() {
    const arr = [];
    let node = this;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
}

function mergeLinkedLists(l1, l2) {
  p1 = l1;
  p1Prev = null;
  p2 = l2;
  // create loop to iterate
  while (p1 && p2) {
    if (p1.value < p2.value) {
      // if the value in p1 is less than value in p2, then continue
      p1Prev = p1;
      p1 = p1.next;
    } else {
      // insert before
      if (p1Prev !== null) p1Prev.next = p2; //
      // else if is the first value
      p1Prev = p2;
      p2 = p2.next; // we make p2 the next
      p1Prev.next = p1;
    }
  }
  if (p1 === null) p1Prev.next = p2; // if we hit hte end of p1, the p1prev.next is p2
  return l1.value < l2.value ? l1 : l2; // return one of them
}

// merging to p1 as the original
function mergeTwoLists(l1, l2) {
  p1 = l1;
  p1Prev = null;
  p2 = l2;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p1Prev = p1;
      p1 = p1.next;
    } else {
      // if less than or equal to, then we must make value at p2 point to p1
      if (p1Prev !== null) p1Prev.next = p2;
      // if not equal to null we must do this
      p1Prev = p2; // because now p1Prev is changed, so this DOES NOT overwrite it
      p2 = p2.next; // remember we need to iterate through
      p1Prev.next = p1;
    }
  }
  if (p1 === null) p1Prev.next = p2; // if we reached the end of p1 first, must tack on the rest of p2
  // because of the initial manipulation, we must change
  return l1.value < l2.value ? l1 : l2; // remember that we are returning hte entire l1 and l2
}

function mergeTwoList2(l1, l2) {
  // keep track of 3 pointers, p1, p2, and p1Prev
  let p1 = l1;
  let p2 = l2;
  let p1Prev = null;
  // create while loop iterating while p1 and p2 both exists
  while (p1 && p2) {
    // if value at p1 is less than value at p2, just continue, set p1 and p1Prev
    if (p1.val < p2.val) {
      p1Prev = p1;
      p1 = p1.next;
    } else {
      if (p1Prev) p1Prev.next = p2;
      p1Prev = p2;
      p2 = p2.next;
      p1Prev.next = p1;
    }
  }

  // outside while if we reach end of p1 before p2, p1Prev.next = p1. If we do null no good

  // return the correct list
}

const l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(4);

const l2 = new Node(0);
l2.next = new Node(1);
l2.next.next = new Node(2);
l2.next.next.next = new Node(3);

console.log("here", mergeTwoLists(l1, l2));
console.log("print", l1.print());
console.log("print", l2.print());

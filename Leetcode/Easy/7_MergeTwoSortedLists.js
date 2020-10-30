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

var mergeTwoLists = function (l1, l2) {
  var mergedHead = { val: -1, next: null },
    crt = mergedHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2;
      l2 = l2.next;
    } else {
      crt.next = l1;
      l1 = l1.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;

  return mergedHead.next;
};

// todo: Iterative AlgoExpert in Place
function mergeLinkedLists2(l1, l2) {
  p1 = l1;
  p1Prev = null;
  p2 = l2;
  // create loop to iterate
  while (p1 && p2) {
    if (p1.val < p2.val) {
      // if the value in p1 is less than value in p2, then continue
      p1Prev = p1;
      p1 = p1.next;
    } else {
      // insert before
      if (p1Prev !== null) p1Prev.next = p2; // if p1Prev is not null
      p1Prev = p2; // when setting this, does not change l1 only changes the p1Prev
      p2 = p2.next;
      p1Prev.next = p1;
    }
  }
  if (p1 === null) p1Prev.next = p2;
  return l1.value < l2.value ? l1 : l2; // return one of them
}

// todo: Recursive Solution
var mergeTwoLists3 = function (l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2; // exit condition
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists3(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists3(l1, l2.next);
    return l2;
  }
};

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

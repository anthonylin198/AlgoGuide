/*

Merge Two Sorted Lists:

1 - 2 -> 4
1 - 3 -> 4

1 -> 1 -> 2 -> 3 -> 4 -> 4


*/

/*

Create test case

l1: 1 -> 3 -> 7
l2: 0 -> 2 -> 5 -> 8 -> 10



merge nodes into the linkedlist

p1: 3
p2: 2
prevNode: 1 -> 2 -> 3 -> 7

l1: 0 -> 1 -> 3 -> 7


inserting the node in list 2 each time it is less than l1 


edge case: if the prev node is null, then we insert before at the head

*/

function mergeTwoLists(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let prevNode = null;
  // while p2 and p1 exists
  while (p1 && p2) {
    if (p2.val <= p1.val) {
      // if prevNode is null
      if (prevNode === null) {
        // inserting at the head
        const temp = p2.next;
        p2.next = p1; // 1 -> 1 -> 2 -> 4
        p2 = temp;
      } else {
        const temp = prevNode.next; // 3 -> 7
        prevNode.next = p2; // 1 -> 2 -> 5 -> 8 -> 10
        prevNode.next.next = temp; // 1 -> 2 -> 3 -> 7
        p2 = p2.next;
      }
    } else {
      p1 = p1.next;
      prevNode = p1;
    }
  }
  // if p2 still exists
  if (p2) {
    p1 = p2;
  }
  return l2;
}

// insert before helper function

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*

Create test case

l1: 1 -> 3 -> 7
l2: 0 -> 2 -> 5 -> 8 -> 10



merge nodes into the linkedlist

p1: 3 -> 7
p2: 5 - 8 -> 10
p1Prev: 2 -> 3 -> 7

l1: 0 -> 1 -> 2 -> 5 -> 8 -> 10
l2: 0 -> 2 -> 5 -> 8 -> 10

inserting the node in list 2 each time it is less than l1 


edge case: if the prev node is null, then we insert before at the head

*/

// todo: Merge two lists solution
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

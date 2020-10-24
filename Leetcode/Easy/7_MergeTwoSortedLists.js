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

sort two sorted linked lists in order by splicing the nodes

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

todo: Solution 1: We will create 2 pointers, and merge l2 into l1. One pointer at l1.head and 1 value at l2.head.
if l2.value > l1.value, got the the next value in l1


if l2.value <= l1.value, then we need to insert the values before


[1,5,7] [,6,9]

[1,5,7]


continue to iterate through until l2.value is at the end

1 --> 2 --> 4      1 --> 3 --> 4


1 --> 1 -- > 2 --> 4

1 ---> 1 --> 2 --> 3 --> 4    we know we can slap that 3 in before when the l2 is different


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

// time complexity is O(min(m,n))
const mergeTwoLists = function (l1, l2) {
  const head = new Node(null);
  let curr = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1; // to ensure that we won't hit a null value
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2; // understand this conditional. If either one has something left, then we return it
  return head.next;
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

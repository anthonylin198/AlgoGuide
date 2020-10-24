/*

Merge 2 sorted linked lists


[1,2,3]   [0, 1.5, 2.5, 6, 7]

[0.5, 1, 1.5, 2, 2.5, 3, 6, 7]



todo: Solution -- Create new linked list, two pointers iterate through each linked list and continue to add on the lower value


The moment we hit the end of one linked list, we know that we can just attach the next one
[0, 1, 1.5, 2, 2.5, 3]



*/

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

function mergeTwoLists(l1, l2) {
  // create new node
  let merged = new Node(null);
  // create pointer for the new linked list
  let pointer = merged;
  // while l1 && l2 exist
  while (l1 && l2) {
    if (l1.val < l2.val) {
      pointer.next = l1;
      pointer = pointer.next;
      l1 = l1.next;
    } else {
      pointer.next = l2;
      pointer = pointer.next;
      l2 = l2.next;
    }
  }
  return pointer;
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

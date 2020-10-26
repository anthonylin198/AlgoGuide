// ! Node Class
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

// todo: Recursive solution -- Better Understand this recursive solution - understand this
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }

  // recursive merge
  if (l1.val > l2.val) {
    [l1, l2] = [l2, l1]; // Swap in place
  }
  l1.next = mergeTwoLists(l1.next, l2);

  return l1 || l2;
};

// todo: Reverse a linked list
function reverseLinkedList(head) {
  let previousNode = null;
  let currentNode = head;
  while (currentNode !== null) {
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}

const l1 = new Node(1);
l1.next = new Node(3);
l1.next.next = new Node(4);

const l2 = new Node(2);
l2.next = new Node(5);
l2.next.next = new Node(6);
l2.next.next.next = new Node(7);

// console.log("here", mergeTwoLists(l1, l2));
console.log("printl1", l1.print());
// console.log("printl2", l2.print());

console.log(reverseLinkedList(l1));

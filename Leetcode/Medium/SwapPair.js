/*

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.


1 -> 2 -> 3 -> 4
2 -> 1 -> 4 -> 3


*/

/*

1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7


! Create new ll that start with null

null -> node
p

node.next = node.next.next.next;    1 -> 3 -> 4 -> 5 -> 6
node.next.next = node.next;


node = node.next.next.next


*/

// null -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
// 1 -> 3 -> 4 -> 5 -> 6 -> 7
// 2 -> 1 -> 3 -> 4 -> 5 -> 6 -> 7

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  print() {
    let p = this;
    const arr = [];
    while (p) {
      arr.push(p.val);
      p = p.next;
    }
    return arr;
  }
}

/*

input: 1 -> 2 -> 3 -> 4 -> 5 -> 6

null -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

temp: 2 -> 3 -> 4 -> 5 -> 6

1 -> 3 -> 4 -> 5 -> 6 -> 7

2 -> 1 -> 3 -> 4 -> 5 -> 6 -> 7



*/

// null -> 2 -> 1 ->
function swapPairs(head) {
  const newList = new ListNode(null);
  newList.next = head;
  let prev = newList;
  // create while loop to go through linked list
  while (prev.next && prev.next.next) {
    let first = prev.next;
    let second = prev.next.next;
    first.next = second.next;
    second.next = first;
    prev.next = second;
    prev = prev.next.next;
  }
  return newList.next;
}

const ll = new ListNode(1);
ll.next = new ListNode(2);
ll.next.next = new ListNode(3);
ll.next.next.next = new ListNode(4);
ll.next.next.next.next = new ListNode(5);
ll.next.next.next.next.next = new ListNode(6);
ll.next.next.next.next.next.next = new ListNode(7);
ll.next.next.next.next.next.next.next = new ListNode(8);

let swapped = swapPairs(ll);

console.log(swapped.print());

/*

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.



1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

2 -> 1 -> 4 -> 3 -> 6 -> 5 -> 7

null -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
 p
null -> 2 -> 1 -> 3 -> 4 -> 5 -> 6 -> 7
             p

null -> 2 -> 1 -> 4 -> 3 -> 5 -> 6 -> 7
                       p
at any node

1) save access to 2
2) point 1 to the 3 -- in order to do this, create new "prev node" starting at null
3) point the 2 to the new 1


*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  print() {
    const arr = [];
    let head = this;
    while (head) {
      arr.push(head.val);
      head = head.next;
    }
    console.log(arr);
  }
}

// null -> 1 -> 2 -> 3 -> 4 -> 5
// swap the pairs
function swapPairs(head) {
  // create new
  let prev = new ListNode(null);
  prev.next = head;
  let pointer = prev;
  while (pointer.next && pointer.next.next) {
    let first = pointer.next;
    let second = pointer.next.next;
    first.next = first.next.next;
    second.next = first;
    pointer.next = second;
    pointer = pointer.next.next;
  }
  return prev.next;
}

const ll = new ListNode(1);
ll.next = new ListNode(2);
ll.next.next = new ListNode(3);
ll.next.next.next = new ListNode(4);
ll.next.next.next.next = new ListNode(5);

swapPairs(ll).print();

ll.print(); // how would we manipulate directly

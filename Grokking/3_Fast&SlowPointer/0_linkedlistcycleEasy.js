// Prompt: given the head of a Singly LinkedList - write a function to determine if the linkedlist has a cycle in it or noe


// singley linked this, have this node and next node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


// Time complexity: O(N)
function has_cycle(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    // fast we go 2 elements at a time
    fast = fast.next.next;
    slow = slow.next; // slow we only get next
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
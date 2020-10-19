// Prompt: given the head of a Singly LinkedList - write a function to determine if the linkedlist has a cycle in it or noe

/*

Slow pointer and fast pointer explained: They will DEFINITELY meet. The fast pointer will meet slow in the same loop




*/

// singley linked this, have this node and next node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/*
1 Solution: iterate through the linkedlist and keep track of the nodes that have been passed, that will lead to complications






todo: 2 pointer approach, where there is a fast and slow pointer. The fast pointer after entering cycle, will always be either 1 or 2 stteps behind the slow pointer, which will make them inevitably meet within 1 cycle

1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7     (CYCLES BACK TO THE 3)

slow: 1, 2, 3, 4, 5
fast: 2, 4, 6, 3, 5

*/

// Time complexity: O(N)
function has_cycle(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
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

// Prompt: given the head of a linkedlist with a cycle, find the length of the cycle

// Solution: use the above solution, and once the fast and the slow pointers meet, we can save the slow pointer and iterate whole lenght of cycle

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/*

Find the length of the cycle with the fast and slow pointer.

1 --> 2 --> 3 --> 4 --> 5 --> 6 (Cycles back to the 3)


KEEP TRACK OF THE NODE ONCE THE INTERSECTION IS HIT
slow: 1, 2, 3, 4 --> 5 --> 6 --> 3 --> 4

fast: 2, 4, 6, 4

*/

function myFindCycleLength(head) {
  let slow = head;
  let fast = head;
  // while loop to iterate throuhg linkedlist and find the intersection
  while (fast && fast.next) {
    // slow goes next
    slow = slow.next;
    // fast = fast.next.next
    fast = fast.next.next;
    // if they are equal
    if (slow === fast) {
      return helpFindLength(fast);
    }
  }
  // else no cycle
  return false;
}

function helpFindLength(node) {
  let startCycle = node.next;
  // keep track of a counter
  let counter = 1;
  // while node is not equal to startCycle, increment counter by 1
  while (node !== startCycle) {
    counter++;
    startCycle = startCycle.next;
  }
  return counter;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${myFindCycleLength(head)}`);
head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${myFindCycleLength(head)}`);

function find_cycle_length(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      // found the cycle
      return calculate_cycle_length(slow);
    }
  }
  return 0;
}

function calculate_cycle_length(slow) {
  let current = slow,
    cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}

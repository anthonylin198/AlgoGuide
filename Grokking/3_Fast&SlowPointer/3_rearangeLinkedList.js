// Given the head of a singly linkedlist, write a method to modify the LinkedList such that nodes from second half are inserted alternately to the nodes from the

// input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
// output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null



// Solution: we find the length of the linked list, and change the pointers

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  // printing the nodes of the linked list
  print_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " "
      temp = temp.next;
    }
    console.log(result);
  }
}

// function to reorder
function reorder(head) {
  if (head === null || head.next === null) {
    return;
  }

  // find middle of the LinkedList
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // slow is now pointing to the middle node
  headSecondHalf = reverse(slow); // reverse the second half
  headFirstHalf = head;
  // rearrange to produce the LinkedList in the required order
  while (headFirstHalf !== null && headSecondHalf !== null) {
    temp = headFirstHalf.next;
    headFirstHalf.next = headSecondHalf;
    headFirstHalf = temp;
    temp = headSecondHalf.next;
    headSecondHalf.next = headFirstHalf;
    headSecondHalf = temp;
  }
  headFirstHalf.next = null;
}

function reverse(head) {
  let prev = null;
  while (head !== null) {
    next = head.next; head.next = prev; prev = head; head = next;
  }
  return prev;
}



const head = new Node(2);
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)

reorder(head)
head.print_list()

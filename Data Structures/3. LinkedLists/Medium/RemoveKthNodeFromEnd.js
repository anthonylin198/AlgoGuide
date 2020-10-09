class LinkedList {
  constructor(value) {
    this.head = value;
    this.next = null
  }
}

function removeKthNodeFromEnd(head, k) {
  // create a counter, and a slow and fast pointer to keep track
  let counter = 1;
  let firstPointer = head;
  let secondPointer = head;
  // iterate until the second pointer, is at the kth node from the front
  while (counter <= k) {
    counter++;
    secondPointer = secondPointer.next;
  }
  // edge case, if k is too large, then if we hit the end, we know we can just get rid of the head
  if (secondPointer === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  // else we keep iterating until k hits the end, first along wiht second, then we can remove the first pointer
  while (secondPointer.next !== null) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }
  firstPointer.next = firstPointer.next.next;
}


const list = new LinkedList(1)
list.next = new LinkedList(2)
list.next.next = new LinkedList(3)


console.log(list)

removeKthNodeFromEnd(list, 1)

console.log(list)
class LinkedList {
  constructor(value) {
    this.head = value;
    this.next = null
  }
}

function removeKthNodeFromEnd(head, k) {
  // find the full length of the linked list -- cycle through
  let counter = 1;
  let first = head;
  let second = head;
  while (counter <= k) { // iterate through the array
    second = second.next;
    counter++
  }

  if (second === null) { // iterate through, if null just remove the head
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  // single iteration through - first does not move until we move second k out, so first ends up moving length - counter which is what we want
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
}
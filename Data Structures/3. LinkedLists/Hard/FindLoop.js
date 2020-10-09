// This is an input class. Do not edit.

https://leetcode.com/problems/linked-list-cycle-ii/discuss/871169/Javascript-Set-and-Pointers-Solution-with-explanation


class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// todo: Brute force: go through, store nodes into a hashtable - use next, see if the next appears
// todo: MUST USE SET because objects cannot store object instances
function findLoop(head) {
  // store each value in the linked list inside an object
  const visited = new Set();
  // iterate through the linkedlist, when there is a value, then return
  let pointer = head;
  while (pointer) {
    if (visited.has(pointer)) { // if it exists, then return pointer - this is an O(n) operation
      return pointer;
    }
    visited.add(pointer);
    pointer = pointer.next;
  }
}

// be able to draw out
function findLoop2(head) {
  let first = head.next;
  let second = head.next.next;
  while (first !== second) {
    first = first.next;
    second = second.next.next;
  }
  first = head;
  // this will force them to meet at teh starting point
  while (first !== second) {
    first = first.next;
    second = second.next;
  }
  return first;
}
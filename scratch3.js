/*
Write a function to delete the first instance of a node in a singly linked list.
Example: 
Given a linked list:
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 And given a value, 'b', the evaluated result of calling your function should be:
 ('a' -> 'c' -> 'b' -> 'd')
How might you remove a linked list value without adding extra properties to the constructor functions?
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*

iterate through the linked list, and check for the value. Keep track of the previous node as we iterate through the linkedlist

a -> b -> c -> b -> d

p

a -> c -> b -> d


*/

const linkedListRemove = (ll, val) => {
  let current = ll;
  let prev = new Node(null);
  let isHead = true;
  while (current) {
    if (current.val === val) {
      if (isHead) {
        prev.next = current.next;
        return prev.next;
      }
      prev.next = prev.next.next;
      return ll;
    } else {
      isHead = false;
      prev = current;
      current = current.next;
    }
  }
  return ll;
};

const ll = new Node("a");
ll.next = new Node("b");
ll.next.next = new Node("c");
ll.next.next.next = new Node("b");

console.log(ll);

console.log(linkedListRemove(ll, "c"));

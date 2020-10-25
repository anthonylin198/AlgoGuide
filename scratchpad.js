/*

Remove Kth Node from the End. Write a function that takes in a signly linked list and an integer k and removes the kth node from the end of thene node.

*/

/*

1 -> 2 -> 3 -> 4 -> 5 -> 6 

todo: Solution - go through the entire ll, and keep a counter to get to the point. Next take the second pointer and iterate length - k would get us kth node from end. Includes the last one, if k = 2,,

1 -> 2 -> 3 -> 4 -> 5



todo: Single Pass solution. Keep track of counter up to k, and second pointer starts moving once the first pointer hits k

1 -> 2 -> 3 -> 4 ->  5-> 6

pointer1 = 5
pointer2 = 3

*/

function removeKthNode(head, k) {
  let p1 = head;
  let p2 = head;
  let counter = 0;
  // create while loop, because we need to end at one before
  while (counter <= k) {
    p1 = p1.next;
    counter++;
  }

  // think of the edge case, if k is too large, we remove the head

  // create a counter to keep iterating through until p1 is null
  while (p1) {
    p1 = p1.next;
    p2 = p2.next;
  }
  // remove the p2 node, just set p2 to p2.next
  p2.next = p2.next.next;

  return head;
}

// todo: Merge the linkedlists in place

/*

1 -> 2    0 -> 1.5 -> 7


if is larger, then we add before. if it is at the head, then we need to create a new node. afterwards we create new node as well. If p2.val is less than p1.val, insert new node before
Keep track of the node before

p1
p2


0 -> 1 -> 2 -> 3
0 -> 1 -> 2 -> 3
0 -> 1 -> 1.5 -> 2 -> 3


*/

function linkedList(l1, l2) {
  // catch edge cases
  // create p1, p2, and slowPointer to keep track
  let p1 = l1;
  let p2 = l2;
  let slowPointer = l1;
  let hasIterated = false;
  // while loop keeps going until  l1 or l2 is null, then we can add the rest of the other
  while (p1 && p2) {
    // if p2.val is less than p1.val, then we can insert before
    if (p2.val < p1.val) {
      insertBefore(p2.val, slowPointer, p1, p2);
      p2 = p2.next;
    } else {
      p1 = p1.next;
      if (hasIterated) slowPointer = slowPointer.next;
      hasIterated = true;
    }
  }

  p1.next = p2 || null;
}

// helper function to insert before
function insertBefore(value, slowPointer, p1, p2) {
  let newNode = new ListNode(value);
  newNode.next = p1;
  slowPointer.next = newNode;
}

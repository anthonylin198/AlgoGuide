/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.


*/

/*

1 -> 2 -> 3 -> 4 -> 5    n = 2
                   p1
          p2                                     

1 -> 2 -> 3 -> 5

once counter is equal to n, start iterating through p2 until p1.next is equal to null. then we would just to p2.next to p2.next.next


Edge Cases: if we need to remove the head, or if we need to remove the last node


1 -> 2     n = 2        counter = 1
    p1
p2

1 -> 2 -> 3     n = 2
         p1
p2
*/

/*

1 -> 2 -> 3 -> 4 -> 5
     p3   p1
                   p2

*/
function removeNthFromEnd(head, n) {
  // edge case
  if (!head.next) {
    return null;
  }
  let prevNode = new ListNode(null);
  // create p1 and p2 that start from head
  let p1 = head;
  let p2 = head;
  // create counter variable
  let counter = 0;
  // while p1.next
  while (p1) {
    if (counter >= n) {
      prevNode = p2;
      p1 = p1.next;
      p2 = p2.next;
      counter++;
    } else {
      p1 = p1.next;
      counter++;
    }
  }

  // if n is equal to counter, then we know we must remove the head
  if (n === counter && n > 1) {
    return head.next;
  } else {
    prevNode.next = prevNode.next.next;
    return head;
  }
}

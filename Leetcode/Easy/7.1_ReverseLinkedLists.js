/*

1 -> 2 -> 3 -> 4 -> 5

5 -> 4 -> 3 -> 2 -> 1



Doing this in place: 


keep track of the previous node, as well as the current node. Previous null should start at null

1 -> null                      2 -> 3 -> 4 -> 5     make sure to keep track of the nextnode
2 -> 1 -> null                 3 -> 4 -> 5
3 -> 2 -> 1 -> null            4 -> 5
4 -> 3 -> 2 -> 1 -> null       5





*/

function reverse(head) {
  let prevNode = null;
  let currNode = head;

  // create while loop to iterate through the linked list
  while (currNode) {
    // must keep track of the next node
    const nextNode = currNode.next; // we initialize it up here, so it does not change as the linkedlist is being manipulated
    // set currnode.next to the prev node
    currNode.next = prevNode;
    // set prevnode to equal current node
    prevNode = currNode;
    // take the constant
    currNode = nextNode;
  }
}

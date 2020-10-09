


// reverse the linkedlist: 

// 1 --> 2 --> 3 --> 4 --> 5 --> 6
function reverseLinkedList(head) {
  let previousNode = null;
  let currentNode = head;
  while (currentNode !== null) {
    // save the nextNode
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}

// 1 --> 2 --> 3 --> 4

//  1 --> null --> 2 --> 3 --> 4
function reverseLinkedList(head) {
  let previousNode = null;
  let currentNode = head;
  while (currentNode !== null) {
    const nextNode = currentNode.next; // need to save the next node, because we are going to change it
    currentNode.next = previousNode
    previousNode = currentNode;
    currentNode = nextNode; // the original currentnode.next, sets it to the 2
  }

  return previousNode



}
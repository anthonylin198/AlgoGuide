var swapPairs = function (head) {
  if (!head) return null;

  let newHead = new ListNode(null);
  newHead.next = head;
  let prev = newHead;

  // YOU CAN MOVE THE NODES AROUND, THE POINTER STAY ON THE NODE
  while (prev.next && prev.next.next) {
    console.log(prev);
    let first = prev.next;
    let second = prev.next.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
    console.log(prev);
  }

  return newHead.next;
};

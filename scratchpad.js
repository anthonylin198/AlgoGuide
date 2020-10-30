/*


Write a function that takes the head of a singly linked list and integer k, and removes the kth node from the end

0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
k = 4

0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9


What should we do if k is greater than node. At least k nodes



*/

/*

0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
k = 4

Must remove the node at: length of linked list - k + 1


2 pointers - one pointer start from 0 and iterate until the end, second pointer starts from 0 and interates once first pointer hits k

if p1.next is null, then we need to remove the 6th node
counter = 4
p1= null
p2= 5   -- point to the 7

0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
                         p         p



Solution: O(n) time and O(1) space



*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*

p1=9
p2=5
counter=4
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

0 -> 1 -> 2 -> 3 -> 4



*/

// we need to be able to handle the edge case of removing the first node. What if k is equal to the full length
function removeKthNodeFromEnd(head, k) {
  // create p1 and p2
  let p1 = head;
  let p2 = head;
  let counter = 0;

  // while p1.next is not null
  while (p1.next) {
    if (counter === k) {
      p1 = p1.next;
      p2 = p2.next;
    } else {
      p1 = p1.next;
      counter++;
    }
  }
  if (k - counter >= 1) {
    // means k is too large
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  const temp = p2.next.next;
  p2.next = temp;
  return;
}

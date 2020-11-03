/*

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. 

Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7


*/

/*

7243
 564

todo: Reverse the linkedlist, then we can just take the sume as we go

3 -> 4 - 2 -> 7
4 -> 6 -> 5


num1 + num2 + carry = 7

keep going until num1 and num 2 and carry don't exist


todo: Iterate to the end of the linkedlists - start from the ones


num1 
num2
carry



*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  print() {
    const arr = [];
    let node = this;
    console.log(node);
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
}
function addTwoNumbers(l1, l2) {
  // reverse l1 and l2 linked lists
  l1 = reverse(l1);
  l2 = reverse(l2);
  let carry = 0;
  let sum = new Node(null); // store the sum in a linked list
  let sumPointer = sum;
  // while the next value exists in the ll
  while (l1 || l2 || carry) {
    // keep track of the sum of num1 + num2 + carry
    const num1 = l1 ? l1.val : 0;
    const num2 = l2 ? l2.val : 0;
    const currentSum = num1 + num2 + carry;
    carry = currentSum >= 10 ? 1 : 0;
    sumPointer.next = new Node(currentSum % 10);
    sumPointer = sumPointer.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  // we should have reversed linkedlist correct
  sum = reverse(sum.next);
  return sum;
}

function reverse(head) {
  // create variables for previous
  let prevNode = null;
  while (head) {
    const nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }
  return prevNode;
}

const ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(3);
ll.next.next.next = new Node(4);

const ll2 = new Node(6);
ll2.next = new Node(6);

console.log(addTwoNumbers(ll, ll2).print());

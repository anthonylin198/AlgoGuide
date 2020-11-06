/*

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. 

Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7


*/

/*

7 -> 2 -> 4 -> 3     5 -> 6 -> 4




9 -> 9 -> 4 -> 7          5 -> 3
1 -> 0 -> 0 -> 0 -> 0



1) Reverse both linkedlists to get access to the first number
7 -> 4 -> 9 -> 9          3 -> 5


2) Add in each digit one at a time to a new linkedlist value at p1 + p2 + carry

3) Add ones digit of that number to the linked list

*/
function addTwoNumbers(l1, l2) {
  // reverse the linked lists
  let p1 = reverse(l1); // 7 -> 4 -> 9 -> 9
  let p2 = reverse(l2); // 3 -> 5
  // create new linked list
  let sum = new ListNode(null);
  let p = sum;
  let carry = 0;
  // while reversedL1 || reversedL2 || carry exists
  while (p1 || p2 || carry) {
    // save l1val  if it does not exist then 0
    const num1 = p1 ? p1.val : 0;
    const num2 = p2 ? p2.val : 0;
    const currentSum = num1 + num2 + carry;
    carry = currentSum >= 10 ? 1 : 0;
    // add the 1s digit to the sum ll
    p.next = new ListNode(currentSum % 10);
    p = p.next;
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  // return sum
  sum = reverse(sum.next);
  return sum;
}

function reverse(ll) {
  // create a pointer
  let p = ll;
  let prevNode = null;
  while (p) {
    const next = p.next;
    p.next = prevNode;
    prevNode = p;
    p = next; // eventually p will be null and exit
  }
  return prevNode;
}

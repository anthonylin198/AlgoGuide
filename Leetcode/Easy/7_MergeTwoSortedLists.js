/*

Merge two sorted linked lists and return it as a new sorted list. New list should be made by splicing together the nodes of the first two lists

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: l1 = [], l2 = []
Output: []


Input: l1 = [], l2 = [0]
Output: [0]

*/

/*

sort two sorted linked lists in order by splicing the nodes

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

todo: Solution 1: We will create 2 pointers, and merge l2 into l1. One pointer at l1.head and 1 value at l2.head.
if l2.value > l1.value, got the the next value in l1


if l2.value <= l1.value, then we need to insert the values before


[1,5,7] [,6,9]

[1,5,7]


continue to iterate through until l2.value is at the end

1 --> 2 --> 4      1 --> 3 --> 4


1 --> 1 -- > 2 --> 4

1 ---> 1 --> 2 --> 3 --> 4    we know we can slap that 3 in before when the l2 is different


*/

// O(m + n) time complexity
const mergeTwoLists = (l1, l2) => {
  // set pointer for l1 and pointer for l2
  let pointer1 = l1.next;
  let slowPointer = l1; // slow pointer will always be one behind pointer1
  let pointer2 = l2;

  // while l2 exists
  while (pointer2) {
    if (!pointer1) {
      // if there is no pointer 1 we know we can jsut add pointer 2 after
      pointer1 = pointer2;
    }
    if (pointer1.val >= pointer2.val) {
      // then we need to insert before
      // update the next value of the slowPointer
      console.log(slowPointer);
      slowPointer.next = new ListNode(pointer2.val);
      slowPointer.next.next = pointer1; // insert into the pointer
      pointer2 = pointer2.next;
      slowPointer = slowPointer.next;
    } else {
      pointer1 = pointer1.next;
      slowPointer = slowPointer.next;
    }
  }
  return l1;
};
let mergeTwoLists2 = (l1, l2) => {
  let result = new ListNode("^");
  let current = result;
  while (l1 || l2) {
    let min;
    if (!l2 || (l1 && l1.val <= l2.val)) {
      min = l1.val;
      l1 = l1.next;
    } else if (!l1 || (l2 && l2.val <= l1.val)) {
      min = l2.val;
      l2 = l2.next;
    }
    current.next = new ListNode(min);
    current = current.next;
  }
  return result.next;
};

// val and next properties. We need to keep track of the node before as well since that next has to change
function mergeTwoLists3(l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergetwoLists(l1, l2.next);
    return l2;
  }
}

// create helper function to insert before
function insertBefore(node, insertValue) {
  //
}

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


[1,2,3] [1,3,4]

[1,1,2,3]
[1,1,2,3,3]
[1,1,2,3,3,4]


continue to iterate through until l2.value is at the end

1 --> 2 --> 4 --> 5       insert 3


1 --> 2




*/

// val and next properties. We need to keep track of the node before as well since that next has to change
function mergeTwoLists(l1, l2) {
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

let mergeTwoLists = (l1, l2) => {
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

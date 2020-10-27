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

if either list is non existent, just return the other


The typical case - keep a pointer at start of l1 and start of l2
Input: l1 = [1,2,4], l2 = [1,3,10]
Output: [1,1,2,3,4,4]

keep track of l1 and l2


if l2[p2] < l1[p1]  -> insert before

1 -> 1 -> 2 -> 4

if l2[p2] > l1[p1] -> go to next value in l1


keep track of the previous node - starting at null. So if it is null we know it is the first value


think of the very first example


1 -> 2 -> 4        1 -> 3 -> 10

2 must point to the 3 and 3 to the 4
1-> 2 -> 3 -> 4

*/

// understand the mergelinkedlists
function mergeTwoLists(l1, l2) {
  // create pointers for l1 and l2, also keep track of prev node
  let p1 = l1;
  let p1Prev = null;
  let p2 = l2;
  // create while loop that continues while l1 and l2 are not null
  while (p1 && p2) {
    // if the value at p1 is greater than p2
    if (p1.val > p2.val) {
      p1 = p1.next;
      p1Prev = p1;
    } else {
      // insert before
      const temp = p2;
      p1Prev = temp;
      p1Prev.next = p1;
      p2 = p2.next;
    }
  }
}

/*


Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],


Get the maximum height of a bst



            10
        5         20
    2.5   7    8     27
1.25

10 -> 5 -> 2.5 -> 1.25 --- we just check when left and right are nul


*/

function maxHeight(head) {
  // keep track of the max
  let max = 0;
  function maxHeightHelper(head, depth = 1) {
    // check left and check right
    if (head) {
      if (!head.left && !head.right) max = Math.max(max, depth);
      maxHeightHelper(head.left, depth + 1);
      maxHeightHelper(head.right, depth + 1);
    }
  }
  // return the max
  maxHeightHelper(root, (depth = 1));
  return max;
}

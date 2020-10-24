/*

Given a binary tree, you need to compute the length of the diameter of the tree. 
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

Diameter is the longest path between any 2 nodes of the tree.


          1
         / \
        2   3
       / \     
      4   5   


*/

/*

todo: Solution - Find the depth as deep as possible, then the depth as deep as possible on the right side, then add them up

1 --> 2 --> 4 (left side depth is 2)
1 --> 2 --> 5


1 --> 3 (right side depth is 1)


              1
           2     3
        0    0
      0       0
*/

function diameterOfBinaryTree(root) {
  // create a variable to store the max
  let max = 0;

  function diameterHelper(root, depth = 0) {
    // this adds an extra
    if (root) {
      // iterate to the left
      const left = diameterHelper(root.left, depth + 1);
      // iterate to the right
      console.log(left);
      const right = diameterHelper(root.right, depth + 1);
      // replace max with the current most left + right
      max = Math.max(max, left + right);
    }
    return depth;
  }
  diameterHelper(root);
  return max;
}

var diameterOfBinaryTree = function (root) {
  let maxSize = 0;
  (function getDepth(node) {
    if (node == null) return 0;
    let left = getDepth(node.left);
    let right = getDepth(node.right);
    maxSize = Math.max(maxSize, left + right);
    return 1 + Math.max(left, right);
  })(root);
  return maxSize;
};

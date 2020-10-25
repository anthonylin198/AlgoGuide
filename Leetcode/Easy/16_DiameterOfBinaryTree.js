/*

Given a binary tree, you need to compute the length of the diameter of the tree. 
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

Diameter is the longest path between any 2 nodes of the tree.


          1
         / \
        2   3
       / \    \ 
      4   5    10
    /      \  
  3         7
             \
              8
    

    

*/

/*

todo: Solution - the largest is not necessaryily have to go through the root. 
At every node, we find the max height left, and the max height right




*/

// we need to somehow save the leftDepth once it is hit

function diameterOfBinaryTree(root) {
  let max = 0;

  // create recursive helper function - at every node we look for the height of the left side and the right side
  function diameterHelper(node) {
    if (!node) return 0;
    // find height of left side
    // find the height of the right side
    let left = diameterHelper(node.left);
    let right = diameterHelper(node.right);
    max = Math.max(left + right, max);
    // at the end
    return 1 + Math.max(left, right); // WHYY
  }
  diameterHelper(root);
  return max;
}

// solution - optimized
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

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

// todo: Brute force solution
function diameterOfBinaryTree(root) {
  // keep track of the max
  let max = 0;

  // create helperfunction
  function diameterHelper(root) {
    // at every node, we check the max depth to the right and left, and compare that to the max
    if (root) {
      // create variable to store left side
      let left = maxDepth(root.left);
      let right = maxDepth(root.right);
      max = Math.max(left + right, max);
      diameterHelper(root.left);
      diameterHelper(root.right);
    }
  }

  diameterHelper(root);
  return max;
}

function maxDepth(root) {
  if (!root) return 0;
  let max = 0;
  function maxDepthHelper(root, depth = 0) {
    if (root) {
      if (!root.left && !root.right) max = Math.max(max, depth);
      maxDepthHelper(root.left, depth + 1);
      maxDepthHelper(root.right, depth + 1);
    }
  }
  maxDepthHelper(root);
  return 1 + max;
}

// todo: more efficient solution
function diameterOfBinaryTree(root) {
  let max = 0;
  // create recursive helper function - at every node we look for the height of the left side and the right side
  function diameterHelper(node) {
    if (!node) return 0;
    let left = diameterHelper(node.left);
    let right = diameterHelper(node.right);
    max = Math.max(left + right, max);
    // at the end
    return 1 + Math.max(left, right); // WHYY
  }
  diameterHelper(root);
  return max;
}

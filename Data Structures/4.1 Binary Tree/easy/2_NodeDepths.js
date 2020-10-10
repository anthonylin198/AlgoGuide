// the distance between a node in a binary tree and the tree's root is call node depths


// O(n) time and O(1) space
function nodeDepths(root) {
  let depthSum = 0;
  // create helper function
  function calculateNodeDepths(node, depth = 0) {
    if (node) {
      // recursive call to the left, adding 1 to the depth
      calculateNodeDepths(node.left, depth + 1);
      // add the depthSum += depth
      depthSum += depth;
      // recursive call to the right, with node.right, depthSum, depth + 1
      calculateNodeDepths(node.right, depth + 1)
    }
    return depthSum
  }

  calculateNodeDepths(root);
  // return the depth sum
  return depthSum;
}


// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

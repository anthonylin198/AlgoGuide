// function should swap every left node in the tree for its corresponding right node

// Queue Solution



// we need to go all the way down the binary tee and swap those node, and then work way up. always swap the furthese bottome left and right
// we will s
function invertBinaryTree(tree) {
  // create a new no
  let node = tree;
  // call recursive helper function to
  invertTree(node)
  // return the updated bst
  return node;
}


// create invertTree helper function to manipulate the tree
function invertTree(node) {
  // if the node does not exist -- pop off call stack and look 
  if (!node) {
    return;
  }
  // if there is a left node and a right node, we make the swap
  if (node.left || node.right) {
    const temp = node.right;
    node.right = node.left;
    node.left = temp;
  }

  // make the recursive call, left, then right
  invertTree(node.left);
  invertTree(node.right);
}

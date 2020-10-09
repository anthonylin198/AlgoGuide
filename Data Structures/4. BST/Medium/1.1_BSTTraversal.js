// Write three functions that take in a bst an traverse the BST


// inorder traversal is from furthese left to right
function inOrderTraverse(tree, array) {
  if (tree) {
    inOrderTraverse(tree.left, array); // this goes all the way to the end
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

// middle then left then right (not all the way down)
function preOrderTraverse(tree, array) {
  if (tree) {
    array.push(tree.value);
    preOrderTraverse(tree.left);
    preOrderTraverse(tree.right)
  }
  return array;
}

// left, right, root
function postOrderTraverse(tree, array) {
  if (tree) {
    postOrderTraverse(tree.left)
    postOrderTraverse(tree.right)
    array.push(tree.value);
  }
}
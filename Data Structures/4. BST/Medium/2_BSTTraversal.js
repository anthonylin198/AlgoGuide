// ! Write 3 functions that take in a BST and an empty array. Traverse the BST, add its nodes' values to the input array, and return that array. 3 Functions should traverse in-order, pre-order,
// ! post order tree-traversal techniques respectively.

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// starts from the smallest number to the largest (from left to right)
function inOrderTraverse(tree, array) {
  // Create the base case -> if tree is null, then we return
  if (tree) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

// starts from
function preOrderTraverse(tree, array) {}

function postOrderTraverse(tree, array) {}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.right = new BST(22);
console.log(inOrderTraverse(root, []));

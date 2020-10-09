// Write three functions that take in a bst an traverse the BST


class Node {
  constructor(value) {

    this.value = value;
    this.left = null;
    this.right = null
  }
}



// inorder traversal is from furthese left to right
function inOrderTraverse(tree, array = []) {
  if (tree) {
    inOrderTraverse(tree.left, array); // this goes all the way to the end
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

// middle then left then right (not all the way down)
function preOrderTraverse(tree, array = []) {
  if (tree) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array)
  }
  return array;
}

// left, right, root
function postOrderTraverse(tree, array = []) {
  if (tree) {
    postOrderTraverse(tree.left, array)
    postOrderTraverse(tree.right, array)
    array.push(tree.value);
  }
  return array;
}


const bst = new Node(10)
bst.left = new Node(5)
bst.right = new Node(15)


console.log(inOrderTraverse(bst, []))
console.log(preOrderTraverse(bst, []))
console.log(postOrderTraverse(bst, []))
/*
Binary Tree Practice. Different methods of traversal, as well as properly returning answers

*/

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function depthFirstSearch(head, arr = []) {
  // if the head is null, return
  if (head) {
    // push the head every time
    arr.push(head.val);
    // if head.left, return
    depthFirstSearch(head.left, arr);
    // then do head. right
    depthFirstSearch(head.right, arr);
  }

  return arr;
}

const bst = new Node(10);
bst.left = new Node(5);
bst.left.left = new Node(2);
bst.right = new Node(15);

console.log(depthFirstSearch(bst));

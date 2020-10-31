/*

                  20
                10  30
               8 15   50
              5

*/

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// DFS -- go as far down as possible then add
function depthFirstSearch(head, arr = []) {
  if (!head) {
    return;
  }
  depthFirstSearch(head.left, arr);
  arr.push(head.val);
  depthFirstSearch(head.right, arr);
  return arr; // understand this return array
}

// Breadth first search -- we need to keep a queue to keep track
function breadthFirstSearch(head, arr = []) {
  const queue = [head];
  while (queue.length) {
    const current = queue.shift(); // shift the queue over
    arr.push(current.val);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return arr;
}

const bst = new Node(20);
bst.left = new Node(10);
bst.right = new Node(30);
bst.left.left = new Node(8);
bst.left.left.left = new Node(5);
bst.left.right = new Node(15);
bst.right.right = new Node(50);

console.log(depthFirstSearch(bst));
console.log(breadthFirstSearch(bst));

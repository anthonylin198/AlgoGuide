/*

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

*/

/*

        3
      / \
      9  20
    /  /  \
   5   15   7

[
  [3],
  [9,20],
  [5, 15,7]
]



todo: Create a queue that starts with the top level [3] Way to keep track of each current level
create a levelCounter
queue: [9, 20]
lotArr: [[3], [9]]

[9,20,5]


[3]
[9,20]
[20, 5]
[5, 15, 7]




*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
[3]    current length = 1
[9, 20]      current length = 2




*/
function levelOrder(root) {
  if (!root) return [];
  // create queue that will store each level of node
  const queue = [root];
  const levels = [];
  // while the queue exists
  while (queue.length) {
    const currentLength = queue.length;
    const currentLevel = [];
    for (let i = 0; i < currentLength; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    levels.push(currentLevel);
  }
  return levels;
}

const bst = new Node(3);
bst.left = new Node(9);
bst.right = new Node(20);
bst.left.left = new Node(5);
bst.right.left = new Node(15);
bst.right.right = new Node(7);

console.log(levelOrder(bst));

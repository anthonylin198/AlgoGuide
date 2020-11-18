/*

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],


    3
   / \
  9  20
    /  \
   15   7


   [
  [3],
  [20,9],
  [15,7]
]
*/

/*

Solution: Go right then go left. Go left and go right. Keep some sort of switch that will cahnge the direction as we return the values

Keep a stack, and push on the children node, push on in different order as the switch changes
switch = right

       3
  9      20

switch = left
            3
      9            20
  4     6       5      8




                1
             2     3
          4          5     
        6  7  

        [[1], [3,2] , [4,5], [7,6]
  */

//todo: our solution

function zigzagLevelOrder(root) {
  if (!root) return [];
  let isOdd = true;
  const results = [];
  const q = [root];

  while (q.length) {
    const level = [];
    const currentLength = q.length;
    for (let i = 0; i < currentLength; i++) {
      const currentNode = q.shift();
      if (isOdd) level.push(currentNode.val);
      else level.unshift(currentNode.val);
      // push on the children
      if (currentNode.left) q.push(currentNode.left);
      if (currentNode.right) q.push(currentNode.right);
    }
    if (isOdd) isOdd = false;
    else isOdd = true;
    results.push(level);
  }
  return results;
}

// todo : Leetcode clean Solution

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let output = [];
  let deep = 0;
  while (queue.length > 0) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (deep % 2 == 0) level.push(node.val);
      else level.unshift(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    output.push(level);
    deep++;
  }

  return output;
};

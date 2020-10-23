/*

Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.



Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.


Input: root = [4,2,5,1,3], target = 3.714286


    4
   / \
  2   5
 / \
1   3

Output: 4



*/

/*


Solution: Iterate through the BST using DFS. Keep track of the current closest target, and override if Math.abs is closer to 0


    10
   / \
  5   20
 / \
2   8

closest value to 15


*/

// brute force approach going through the entire bst
function closestValue(root, target) {
  // create a variable to keep track of the closest value
  let closestVal = Infinity;
  // keep track of the smallest difference
  let smallestDif = Infinity;
  // create a helper function to iterate through the bst and continue to look for the values
  function closestValue(root, target) {
    if (root) {
      if (Math.abs(target - root.val) < smallestDif) {
        smallestDif = Math.abs(target - root.val);
        closestVal = root.val;
      }
      closestValue(root.left, target);
      closestValue(root.right, target);
    }
  }

  closestValue(root, target);
  return closestVal;
}

function closestValue2(root, target) {
  // keep track of the smallest value and the smallest difference
  let smallestVal = Infinity;
  let smallestDif = Infinity;
  // while root exists
  while (root) {
    const checkDif = Math.abs(target - root.val);
    if (checkDif < smallestDif) {
      smallestDif = checkDif;
      smallestVal = root.val;
    }
    if (target - root.val < 0) {
      root = root.left;
    } else if (target - root.val > 0) {
      root = root.right;
    } else {
      return root.val;
    }
  }
}

function findClosestValueInBst(tree, target) {
  // create a variable to be the head
  let node = tree;
  let closestDifference = Infinity;
  let closestValue = Infinity;
  // create a while loop that will iterate until value is equal, or if reach null value
  while (node) {
    const checkDif = Math.abs(target - node.value);
    // replace if makes difference
    if (checkDif < closestDifference) {
      closestDifference = checkDif;
      closestValue = node.value;
    }
    // check if it is greater than 0
    if (target - node.value > 0) {
      node = node.right;
    } else if (target - node.value < 0) {
      node = node.left;
    } else {
      return closestValue;
    }
  }
  return closestValue;
}

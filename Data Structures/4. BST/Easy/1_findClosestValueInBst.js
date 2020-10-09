
// prompt: given a bst and target integer value, return closet value to that target value in hte bst

// 




class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right
  }
}


// write a function that takes in a BST and target integer value and returns the closest value to that target value contained in the BST - O(loog(n)) - we can just keep track of the closest value
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
    if ((target - node.value) > 0) { // be careful with these values
      node = node.right;
    } else if ((target - node.value) < 0) {
      node = node.left;
    } else {
      return closestValue;
    }
  }
  return closestValue;
}













// ! O(log(n)) time complexity and O(log(n)) space from the recursive call stack
// function findClosestValueInBst(tree, target) {
//   // create a recursive helper function to iterate through the tree, and update the closest value
//   function findClosestValueInBstHelper(tree, target, closest) {
//     // exit condition is if tree is equal to null, then we want to return the closest value
//     if (tree === null) {
//       return closest;
//     }
//     // check if the current tree.value is closer than the current closest number, and update closest if it is
//     if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
//       closest = tree.value;
//     }
//     // if closest is less than the target, then we recursive call right
//     if (tree.value < target) {
//       return findClosestValueInBstHelper(tree.right, target, closest); // we must return this value
//     } else if (tree.value > target) {
//       return findClosestValueInBstHelper(tree.left, target, closest);
//     } else {
//       return closest;
//     }
//   }
//   return findClosestValueInBstHelper(tree, target, tree.value);
// }


const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);


console.log(findClosestValueInBst(root, 13))
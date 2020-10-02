
// prompt: given a bst and target integer value, return closet value to that target value in hte bst

// 




class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right
  }
}

// ! O(log(n)) time complexity and O(log(n)) space from the recursive call stack
function findClosestValueInBst(tree, target) {
  // create a recursive helper function to iterate through the tree, and update the closest value
  function findClosestValueInBstHelper(tree, target, closest) {
    // exit condition is if tree is equal to null, then we want to return the closest value
    if (tree === null) {
      return closest;
    }
    // check if the current tree.value is closer than the current closest number, and update closest if it is
    if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
      closest = tree.value;
    }
    // if closest is less than the target, then we recursive call right
    if (tree.value < target) {
      return findClosestValueInBstHelper(tree.right, target, closest); // we must return this value
    } else if (tree.value > target) {
      return findClosestValueInBstHelper(tree.left, target, closest);
    } else {
      return closest;
    }
  }
  return findClosestValueInBstHelper(tree, target, tree.value);
}


const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);



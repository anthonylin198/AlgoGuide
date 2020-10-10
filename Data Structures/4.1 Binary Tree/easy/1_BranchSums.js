// write a funtion that takes a binary tree and returns a list of its branch sums ordered form leftmost branch sum to rightmost


// this will be similar to in order travfersal
// every time we hit a leaf, we want to push the sum to the array

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



function branchSums(root) {
  // create an arr to store all branch Sum
  const arr = [];
  // call recursive function too fill up the arr
  getBranchSums(root, arr)


  // return the arr
  return arr;

}

function getBranchSums(node, arr, sum = 0) {
  // if the node is not existent, return -- since return pops off and won't continue
  if (!node) return;
  // add node.value to the branch sum
  sum += node.value;
  // if node is a leaf, then we can push through the sum - then return to pop off the call stack
  if (!node.left && !node.right) {
    arr.push(sum);
    return;
  }
  // recursive call going left
  getBranchSums(node.left, arr, sum);
  // recursive call going right
  getBranchSums(node.right, arr, sum);
}
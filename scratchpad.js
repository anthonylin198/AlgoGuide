/*

Subtree of another subtree. Every time we see a value that is equal to hte node.value, we check if that subtree is exactly identical to the given tree



BETTER UNDERSTAND THE CALL STACK, WHY DOESN'T YOUR SOLUTION WORK. Better understanding of traversal, then you can logic your way through this question


*/

function isSubtree(s, t, isEqual = false) {
  // depth first search through the tree, if s.val = t.val, call the helper funciton
  if (!s) {
    return;
  }
  if (s.val === t.val) {
    isEqual = isSame(s, t);
    console.log(isEqual);
  }
  isSubtree(s.left, t, isEqual);
  isSubtree(s.right, t, isEqual);
  return isEqual;
}

// helper function comparing
function isSame(s, t, check = true) {
  // if s exists but t does not false
  if (!s && !t) {
    return;
  }
  if ((s && !t) || (!s && t) || s.val !== t.val) {
    check = false;
    return;
  }
  // iterate both trees at the same time
  isSame(s.left, t.left, check);
  isSame(s.right, t.right, check);
  // return true or false
  return check;
}

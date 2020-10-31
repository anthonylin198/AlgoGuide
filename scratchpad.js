/*

Subtree of another subtree. Every time we see a value that is equal to hte node.value, we check if that subtree is exactly identical to the given tree

BETTER UNDERSTAND THE CALL STACK, WHY DOESN'T YOUR SOLUTION WORK. Better understanding of traversal, then you can logic your way through this question

*/

/*

todo: Solution -- iterate through the binary tree, if we see a value that is equal to the tree we want to match, check equality. if it is equal set to true


                      3
                    4    4
                  1  2
                    





*/

// todo: Find a way to save the value of the checked. if check is every true se cna reutrn
function isSubtree(s, t) {
  // create a variable to check
  let check = false;
  // create helper function for dfs through the tree
  function dfs(s, t) {
    if (!s || check === true) {
      return;
    }
    if (s.val === t.val) {
      check = checkEqual(s, t);
    }
    dfs(s.left, t);
    dfs(s.right, t);
  }
  dfs(s, t);
  // return the check variable
  return check;
}

// create helper function to check equality between the trees
function checkEqual(s, t) {
  if (!s && !t) {
    return true;
  }

  if ((!s && t) || (s && !t) || s.val !== t.val) {
    return false;
  }
  // recursive call to the left for s and t
  checkEquals(s.left, t.left);
  checkEquals(s.right, t.right);
}

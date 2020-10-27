/*


Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. 
A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.


CASE 1 returns true
     3
    / \
   4   5
  / \
 1   2



   4 
  / \
 1   2


CASE 2 returns false
     3
    / \
   4   5
  / \
 1   2
    /
   0


   4
  / \
 1   2



*/

/*

iterate through each node of the binary tree. if an equal value is found, check if they are equal


checkBST Function: we need both side to go until they are null. If one is null and the other is not, the nwe return false

is it assumed that tree s is always larger?




*/

// check whether tree t has ex

function bstMatch(s, t) {
  let checker = false;
  // create a helper function
  function traverse(s, t) {
    // if s doesn't exist, then return
    if (!s) return;
    // is s.val equals t.val
    if (s.val === t.val) {
      if (bstMatchHelperFunction(s, t)) {
        checker = true;
      }
    }
    traverse(s.left, t);
    traverse(s.right, t);
  }
  traverse(s, t);
  return checker;
}

// create the bst Helper function - if
function bstMatchHelper(s, t) {
  // if s && t does not have right or left values, return true
  const check = true;
  function matchHelper(s, t) {
    // if all the side are not equal, then we can return
    if (s.val !== t.val || (s && !t)) {
      check = false;
    }
    bstMatchHelper(s.left, t.left);
    bstMatchHelper(s.right, t.right);
  }
  matchHelper(s, t);
  return check;
}

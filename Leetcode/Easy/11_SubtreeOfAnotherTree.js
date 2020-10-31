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

todo: Solution -- iterate through the tree and look for the matching subtree, then need to keep iterating through the second subtree and compare to first. If don't match, then no good
     3
    / \
   4   5
  / \
 1   2



   4 
  / \
1   2


1) Search for the value in the tree
2) once the value is found, hten we run a helper function checking if t is equal to s



in worst case O(NM) (subTree not found)
in best case O(M) (subtree found in first step)
averege (N/2M);

*/

// todo: my solution
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

function checkEqual(s, t) {
  // if s nad t both dont exist
  if (!s && !t) {
    return true;
  }
  if (!s || !t || s.val !== t.val) {
    return false;
  }
  const left = checkEqual(s.left, t.left);
  const right = checkEqual(s.right, t.right);
  return left && right;
}

// todo: leetcode solution
var isSubtree = function (s, t) {
  // given a node, returns whether they are the same
  var isSame = function (node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || node1.val != node2.val) return false;
    let left = isSame(node1.left, node2.left);
    let right = isSame(node1.right, node2.right);
    return left && right;
  };

  // whether t is a subtree of the given node
  var dfs = function (node) {
    if (!node) return false;
    if (node.val == t.val && isSame(node, t)) {
      return true;
    }
    return dfs(node.left) || dfs(node.right);
  };
  return dfs(s);
};

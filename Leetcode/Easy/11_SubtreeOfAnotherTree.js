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

function isSubtree(s, t) {
  // while s exists
  while (s) {
    if (s.val === t.val) {
      return checkSubtree(s, t);
    }
    const left = isSubtree(s.left, t);
    const right = isSubtree(s.right, t);
    if (left || right) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

// helper function
function checkSubtree(node1, node2) {
  while (node2) {
    if (node1.val !== node2.val) return false;
    const left = checkSubtree(node1.left, node2.left);
    const right = checkSubtree(node1.right, node1.right);
    return left && right;
  }
}

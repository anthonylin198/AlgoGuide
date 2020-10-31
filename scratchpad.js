/*

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23



*/

/*

                                          20
                              10                    30
                           5       15                     40
                        1            20
  Left: 1
  Right: 30

  1 + 5 + 10 + 15 + 20 + 30


  Left: 5
  Right: 30

  5 + 10 + 15  


  1) find the most common parent of the 2 nodes
    -- search of the left node -- root.left.left
    -- search for the right node root.right 
         -- most common is the root
  
  2) Find the sum from the most common parent


  
                      
*/

function rangeSum(root, L, R) {
  // keep track of the sum
  let sum = 0;
  // create helper function for dfs, only add if between
  function sumHelper(root, L, R) {
    // if !root
    if (!root) {
      return;
    } else if (root.val >= L && root.val <= R) {
      sum += root.val;
    }
    sumHelper(root.left, L, R);
    sumHelper(root.right, L, R);
  }
  sumHelper(root, L, R);
  return sum;
}

// todo: lowest common ancestor for bst
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      break;
    }
  }
  return root;
};

function lowestCommonAncestor(root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
}

// todo: lowest common ancestor for binary tree
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  var resL = lowestCommonAncestor(root.left, p, q);
  var resR = lowestCommonAncestor(root.right, p, q);
  return resL && resR ? root : resL || resR;
}

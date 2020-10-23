/*

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values -- inclusive


Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32


Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23



*/

/*

brute force: we can just keep track of the sum and add values inbetween the range




todo: start from top of BST.

          10
        5     12
      3  7   11  20
    1 

If we had range(L = 3, R = 15)

Sum: 37

10
5
3 -- we do not need to check further left, so can just return

7

12
11

*/

function rangeSumBST(root, L, R, sum = 0) {
  // while root exists
  while (root) {
    if (root.val >= L && root.val <= R) {
      sum += root.val;
    }
    rangeSumBST(root.left, L, R, sum);
    rangeSumBST(root.right, L, R, sum);
  }
  // return the sum
  return sum;
}

function rangeSumBST(root, L, R) {
  // create variable to store the sum
  let sum = 0;

  // recursive function ot go through the bst and add to the sum
  function rangeSumBSTHelper(root, L, R) {
    if (root) {
      if (root.val >= L && root.val <= R) {
        sum += root.val;
      }
      rangeSumBSTHelper(root.left, L, R);
      rangeSumBSTHelper(root.right, L, R);
    }
  }
  rangeSumBSTHelper(root, L, R);
  return sum;
}

// we here

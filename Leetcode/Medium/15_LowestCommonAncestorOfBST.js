/*

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q 
as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


*/

function lowestCommonAncestor(root, p, q) {
  let closest = null;
  function helper(root, p, q) {
    if (!root) return;
    const arr = dfs(root);
    let pcheck = false;
    let qcheck = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === p) {
        pcheck = true;
      }
      if (arr[i] === q) {
        qcheck = true;
      }
    }
    if (pcheck && qcheck) {
      closest = arr[0];
    }
    helper(root.left, p, q);
    helper(root.right, p, q);
  }
  helper(root, p, q);
  return closest;
}

function dfs(root, arr = []) {
  if (!root) return;
  arr.push(root);
  dfs(root.left, arr);
  dfs(root.right, arr);
  return arr;
}

// todo: Learn the leetcode solution

const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right; // p and q are in the right subtree
  if (!right) return left; // p and q are in the left subtree
  return root; // p is in one side and q is in the other
};

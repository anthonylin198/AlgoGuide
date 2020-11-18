/*

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q 
as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


                         1
                     2      3
                  4     5      6
                7  8

              7 & 5




*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left - null;
  }
}

const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q); // 7
  console.log("this is left", left);
  const right = lowestCommonAncestor(root.right, p, q);
  console.log("this is right", right);
  if (!left) return right; // p and q are in the right subtree
  if (!right) return left; // p and q are in the left subtree
  return root; // p is in one side and q is in the other
};

const bst = new TreeNode(1);
bst.left = new TreeNode(2);
bst.right = new TreeNode(3);
bst.left.left = new TreeNode(4);
bst.left.right = new TreeNode(5);
bst.right = new TreeNode(3);
bst.right.right = new TreeNode(6);
bst.left.left.left = new TreeNode(7);
bst.left.left.right = new TreeNode(8);

console.log(lowestCommonAncestor(bst, bst.left.right, bst.left.left.left));

/*




*/

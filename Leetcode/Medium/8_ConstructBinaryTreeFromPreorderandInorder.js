/*


construct a binary tree given preorder and postorder traversal


*/

/*

preorder = [3,9,20,15,7]   root left the nright


inorder: left root right

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]


left: [9]

right: [15, 20, 7]

    3
   / \
  9  20
    /  \
   15   7



we know we can slap on the 3, 


*/

// todo: solution 1
var buildTree = function (preorder, inorder) {
  p = i = 0;
  build = function (stop) {
    if (inorder[i] != stop) {
      var root = new TreeNode(preorder[p++]);
      root.left = build(root.val);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  };
  return build();
};

// todo: solution 2
var buildTree = function (preorder, inorder) {
  let hash = {};
  inorder.forEach((e, i) => {
    hash[e] = i;
  });

  let recur = function (start, end) {
    if (start > end) return null;
    let root = new TreeNode(preorder.shift());
    root.left = recur(start, hash[root.val] - 1);
    root.right = recur(hash[root.val] + 1, end);
    return root;
  };

  return recur(0, inorder.length - 1);
};

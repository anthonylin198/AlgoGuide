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

// todo: solution 1 - pre
var constructFromPrePost = function (pre, post) {
  let i = 0;
  function callDFS(arr) {
    if (!arr.length) return null;
    const node = pre[i++];
    const idx = arr.indexOf(pre[i]);
    const tree = new TreeNode(node);
    tree.left = callDFS(arr.slice(0, idx + 1));
    tree.right = callDFS(arr.slice(idx + 1, arr.indexOf(node)));
    return tree;
  }
  return callDFS(post);
};

// todo: solution 2 - Optimized with hashmap
var constructFromPrePost = function (pre, post) {
  const map = {};
  let i = 0;

  for (let i = 0; i < post.length; i++) {
    map[post[i]] = i;
  }

  function callDFS(start, end) {
    if (start > end || i >= pre.length) return null;
    const node = pre[i++],
      idx = map[pre[i]];
    const tree = new TreeNode(node);
    if (idx < start || idx > end) return tree;
    tree.left = callDFS(start, idx);
    tree.right = callDFS(idx + 1, map[node] - 1);
    return tree;
  }
  return callDFS(0, post.length - 1);
};

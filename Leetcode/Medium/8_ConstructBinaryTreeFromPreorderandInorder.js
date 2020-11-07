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


preorder = [3,9,20,15,7]   Root, left, then right
inorder  = [9,3,15,20,7]

We know that preorder starts with the initial node, inorder goes all the way down



            3

      [9]          [15,20,7]       - we will have root.left will be a recursivecall

                    3
              9           20
           4    9      15     7
        1
               
              
                    3
                
        
        
preorder = [3,9,4,1,9,20,15,7]
inorder = [1,4,9,9,3,15,20,7]    

val = 3

left: [1,4,9,9]             


We get the next value from preorder, find the index in the inorder. Eventually, we will get to the 1, and we need to return

*/

function buildTree(preorder, inorder) {
  function helper(start, end) {
    if (start > end) return null;
    const val = preorder.shift();
    const tree = new TreeNode(val);
    tree.left = helper(start, inorder.indexOf(val) - 1);
    tree.right = helper(inorder.indexOf(val) + 1, end);
    return tree;
  }
  return helper(0, inorder.length - 1);
}

function buildTree(preorder, inorder) {
  // the first value in the tree will be the preorder
  function helper(start, end) {
    if (start > end) return null; // we want to place null in the space
    let val = preorder.shift();
    let root = new TreeNode(val);
    root.left = helper(start, inorder.indexOf(val) - 1);
    root.right = helper(inorder.indexOf(val) + 1, end);
    return root;
  }

  return helper(0, inorder.length - 1);
}

// Prompt: Given a binary tree, populate an array to represent its level-by-level traversal. Populate hte values of all nodes of each level from left to right in separate sub-arrays

// layers of a binary tree, just work down each layer from left to right


// Solution: Breadth First Search Technique: 
// ! Learn this breadth first search solution

class Tree {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const breadthFirstTraversal = (tree, callback) => {
  if (tree == null) {
    return;
  }

  let queue = [tree]

  while (queue.length > 0) {
    let item = queue.shift()
    let value = item.value
    callback(value)

    if (item.left == null && item.right == null) {
      continue
    }
    if (item.left != null) {
      queue.push(item.left)
    }
    if (item.right != null) {
      queue.push(item.right)
    }
  }
}

t = new Tree(1,
  new Tree(2, null, null), new Tree(3,
    new Tree(4, null, null), null))

breadthFirstTraversal(t, console.log)

// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);


// console.log(`Level order traversal: ${traverse(root)}`);
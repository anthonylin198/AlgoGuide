class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
  print(node = this, arr = []) {
    if (!node) return;
    this.print(node.left, arr);
    arr.push(node.val);
    this.print(node.right, arr);
    return arr;
  }
}

// traversing through all elements in the tree
function depthFirstSearch(head, arr = []) {
  if (head) {
    arr.push(head.val);
    depthFirstSearch(head.left, arr);
    depthFirstSearch(head.right, arr);
  }
  return arr;
}

// todo: Find if a value exists, and just stop at the value. We can do this by setting equal a variable equal, then returning the combined
function ifValExists(head, target) {
  if (head) {
    if (head.val === target) {
      return true;
    }
    const leftSearch = ifValExists(head.left, target);
    const rightSearch = ifValExists(head.right, target);
    if (leftSearch === true || rightSearch === true) {
      return true;
    } else {
      return false;
    }
  }
}

/* 

Check if a target value exists in BST. Just check until we hit null



*/

// if val exists, this solves in O(logn) time complexity. Point of the BST is for searching
// todo: Method number 1
function isSubtree(s, t, checker = false) {
  // while s exists
  while (s) {
    if (s.val === t.val) {
      checker = checkSubtree(s, t);
    }
    return isSubtree(s.left, t, checker) || isSubtree(s.right, t, checker); // we can just do this to simplify
    // const right = isSubtree(s.right, t, checker);

    // if (left || right) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  return checker;
}

// helper function
function checkSubtree(node1, node2) {
  while (node2 || node1) {
    if (!node2) return false;
    if (!node1) return false;
    if (node1.val !== node2.val) {
      return false;
    }
    const left = checkSubtree(node1.left, node2.left);
    const right = checkSubtree(node1.right, node2.right);
    return left && right;
  }
  return true;
}

// todo: Nice
function isSubtree(s, t, checker = false) {
  // while s exists
  while (s) {
    if (s.val === t.val) {
      checker = checkSubtree(s, t);
    }
    return isSubtree(s.left, t, checker) || isSubtree(s.right, t, checker);
  }
  return checker;
}

// helper function
function checkSubtree(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2 || node1.val !== node2.val) return false;
  const left = checkSubtree(node1.left, node2.left);
  const right = checkSubtree(node1.right, node2.right);
  return left && right;
}

const bst = new Node(10);
bst.left = new Node(5);
bst.left.right = new Node(7);
bst.left.left = new Node(2);
bst.right = new Node(15);

console.log(bst.print());

// console.log(depthFirstSearch(bst));

// console.log(ifValExists2(bst, 7));

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }


  // O(log(n)) time and O(1) space
  insert(value) {
    // we need to keep checking if it is greater than or less than, until one side is not null
    let node = this;
    while (true) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new BST(value);
          break;
        }
        node = node.left
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new BST(value)
        }
        node = node.right
      } else {
        console.log("already exists")
        return;
      }
    }
    return this;
  }

  contains(value) {
    // Write your code here.
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}



const bst = new BST(5)
bst.insert(2)
bst.insert(7)
bst.insert(9)
bst.insert(6.5)
bst.insert(7)


console.log(bst)
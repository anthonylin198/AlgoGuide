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
          break;
        }
        node = node.right
      } else {
        console.log("already exists")
        return;
      }
    }
    return this;
  }

  // ologn -- can restructure, do if, else if, then else we know it is equal
  contains(value) {
    // find if contains value
    let node = this;
    // while node exists
    while (node) {
      // check if is node.value === value , then return true
      if (node.value === value) {
        return true;
      } else {
        // else, we check if is less than or greater than
        if (value < node.value) {
          node = node.left
        } else {
          node = node.right
        }
      }
    }
    return false;
  }

  // need to keep track of the parent node
  remove(value, parentNode = null) {
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


console.log(bst.contains(6.5))


console.log(bst)
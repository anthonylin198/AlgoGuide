// function takes a bst and just returns boolean representing whether BST is valid.

class BST {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}




// create min and max values -- ask if the bst will have all unique values, or if there are duplicates
function validateBst(tree, minValue = -Infinity, maxValue = Infinity) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false; // greater than or equal, left side should not have anything greater than or equal to starting number
  const validateLeft = validateBst(tree.left, minValue, tree.value)
  const validateRight = validateBst(tree.right, tree.value, maxValue);
  return validateLeft && validateRight;
}

const bst = new BST(10)
bst.left = new BST(5)
bst.right = new BST(15)

console.log(bst)

console.log(validateBst(bst))
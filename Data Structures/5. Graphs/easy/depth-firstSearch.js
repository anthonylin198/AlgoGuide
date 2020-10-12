// depth first search looks from all the way left, to right of the tree

function depthFirstSearch(array = []) {
  // we need to us the this keyword
  array.push(this.name);
  for (const child of this.children) {
    child.depthFirstSearch(array);
  }
  return array;
}
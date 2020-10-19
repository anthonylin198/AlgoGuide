/*

Traverse a binary tree using depth first search


depth first search

                20
            10       30
          5    15      45



[20 , 10, 10, 5, 15, 30, 45]
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// create a function to iterate through in this manner

function depthFirstSearch(head) {
  // create arr to store values
  const arr = [];
  // recursive helper function to iterate through the tree with DFS
  function dfs(head) {
    // if the head does not
    if (!head) {
      return;
    }
    arr.push(head.value);
    dfs(head.left);
    dfs(head.right);
  }
  // return array with stored values
  dfs(head);
  return arr;
}

const head = new Node(20);
head.left = new Node(10);
head.left.left = new Node(5);
head.left.right = new Node(15);
head.right = new Node(30);
head.right.right = new Node(45);

console.log(depthFirstSearch(head));

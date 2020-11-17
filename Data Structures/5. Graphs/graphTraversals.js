// DFS and BFS
// Often represented in code with value, and a list of teh edges

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // check if it is
    array.push(this.name);
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].depthFirstSearch(array);
    }
    return array;
  }
  /*

  queue: [2, 3, 4]

  */
  breadthFirstSearch(array) {
    // create queue
    const queue = [this];
    // push the value
    while (queue.length) {
      const bfsNode = queue.shift();
      for (let child of bfsNode.children) {
        queue.push(child);
      }
      array.push(bfsNode.name);
    }
    return array;
  }
}

const graph = new Node(1);
graph.addChild(new Node(2));
graph.addChild(new Node(3));
graph.addChild(new Node(4));

graph.children[0].addChild(new Node(5));
graph.children[0].addChild(new Node(6));

// console.log(graph);

console.log(graph.depthFirstSearch([])); // we go deep first
console.log(graph.breadthFirstSearch([])); // breadth first

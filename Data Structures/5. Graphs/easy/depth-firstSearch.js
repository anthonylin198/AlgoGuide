// and methods to the class.
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
    array.push(this.name);
    // this keeps iterating until none is left
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    // return array at the end
    return array;
  }
}

const graph = new Node("A");

const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");
const G = new Node("G");
const H = new Node("H");
const I = new Node("I");

graph.children = [B, C, D];

console.log(graph);

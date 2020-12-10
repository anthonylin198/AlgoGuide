/*

add, remove, move, print employee hierarchy.


                      CEO

                  CTO     CFO
              eng lead
              SWE SWE

*/

class Node {
  constructor(name, parent) {
    this.status = name;
    this.parent = parent;
    this.children = [];
  }

  // add employee to the hierarchy - do bfs, once we find the parent, we add to the child
  addChild(name) {
    // todo: Conditionals so then you know where to add
    this.children.push(new Node(name));
  }

  // Print out the employee hierarchy
  breadthFirstSearch(array) {
    const queue = [this];
    // push value
    while (queue.length) {
      const bfsNode = queue.shift();
      for (let child of bfsNode.children) {
        queue.push(child);
      }
      array.push(bfsNode.status + " parent " + bfsNode.parent);
    }
    return array;
  }
}

const hierarchy = new Node("CEO", null);
// Adding rank below the VP
hierarchy.children.push(new Node("VP1", "CEO"));
hierarchy.children.push(new Node("VP2", "CEO"));
hierarchy.children.push(new Node("VP3", "CEO"));

// Adding ranks below VP1
hierarchy.children[0].children.push(new Node("MGR1", "VP1"));
hierarchy.children[0].children.push(new Node("MGR2", "VP1"));
hierarchy.children[0].children.push(new Node("MGR3", "VP1"));

// Adding ranks below VP2
hierarchy.children[1].children.push(new Node("MGR4", "VP2"));
hierarchy.children[1].children.push(new Node("MGR5", "VP2"));

// Adding ranks below VP3
hierarchy.children[2].children.push(new Node("MGR6", "VP3"));

// adding ranks below MGR1
hierarchy.children[0].children[0].children.push(new Node("EMP1", "MGR1"));
hierarchy.children[0].children[0].children.push(new Node("EMP2", "MGR1"));
hierarchy.children[0].children[0].children.push(new Node("EMP3", "MGR1"));
hierarchy.children[0].children[0].children.push(new Node("EMP4", "MGR1"));

console.log(hierarchy);

console.log(hierarchy.breadthFirstSearch([]));

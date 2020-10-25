// {name: A children: [{name: B, children: [name: D, children: []]}, {name: C, children: []}]}

// returned array with BFS: [A, B, C, D]

// Implment BFS using a Queue. Add the children of each node to the Queue, then we shift and push the value to the bfsArr

// Queue: []
// bfsArr: [A, B, C, D]

// O(V+E) is the number of vertices and edges in the graph
function breadthFirstSearch(array) {
  // create the queue that will store all the children nodes. this starts from top level node
  const queue = [this]; // this is thae starting value
  // while the lenth of the queue exists
  while (queue.length) {
    // take the first value in the queue and push to the array
    const current = queue.shift;
    array.push(current.name);
    // create a for loop to iterate through the children of the current node
    for (const child of current.children) {
      queue.push(child);
    }
  }
  // after the queue is empty return the array
  return array;
}

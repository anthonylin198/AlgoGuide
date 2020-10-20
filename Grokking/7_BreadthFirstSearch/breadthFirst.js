// Going the breadth first prior to the depth

/*


                20
            10       30
          5    15      45

          20, 10, 30, 5, 15, 45




Create a queue and continuiosuly push children of each passed to the queue


arr = [20, 10, 30]

queue: [20]
queue: [20, 10, 30] add children, then shift queue and add to the array
queue: [10, 30]
queue: [10, 30, 5, 15]
queue: [30, 5, 15]



*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// really understand the time space complexity analysis as you run through a second time
function bfs(head) {
  const arr = [];
  // create helper function for bfs
  function bfsHelper(head) {
    // create queue if everything in a level
    const queue = [head];
    while (queue.length > 0) {
      const current = queue.shift();
      arr.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  bfsHelper(head);

  return arr;
}

const head = new Node(20);
head.left = new Node(10);
head.left.left = new Node(5);
head.left.right = new Node(15);
head.right = new Node(30);
head.right.right = new Node(45);
console.log(bfs(head));

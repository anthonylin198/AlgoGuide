class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }

  print() {
    const arr = [];
    let node = this;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
}

function playground(head) {
  let currentNode = head;
  const nextNode = currentNode.next;
  currentNode.next = null; // you can't change the same shit directly
  console.log(nextNode.print()); // this would be the entire thing
  console.log(currentNode.print()); // this would be 1 -> null
}

// test 2
function playground2(head) {
  let currentNode = head;
  const nextNode = currentNode.next;
  currentNode.next.next = null; // you can't change the same shit directly
  console.log(nextNode.print());
}

const l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);
l1.next.next.next = new Node(4);
l1.next.next.next.next = new Node(5);

playground(l1);

// playground2(l1);

// if you need to man

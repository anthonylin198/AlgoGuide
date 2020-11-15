class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  push(val) {
    let pointer = this;
    const newNode = new Node(val);
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = newNode;
  }

  print() {
    let pointer = this;
    const arr = [];
    while (pointer) {
      arr.push(pointer.val);
      pointer = pointer.next;
    }
    console.log(arr);
  }
}

const ll = new Node(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);
ll.push(6);

console.log(ll);
ll.print();

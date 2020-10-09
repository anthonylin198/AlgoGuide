// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // create a function to print out the linkedlist
  printList(node) {
    const arr = [];
    while (node) {
      arr.push(node.value)
      node = node.next
    }
    return arr;
  }

  // O(1) time O(1) space
  setHead(node) {
    if (this.head === null) { // if no head set, then initial is the head and the tail
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    // Write your code here.
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertAfter(this.tail, node)
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert); // remove node to insert
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    // setting node to insert correctly 
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next; // equal to the node.next rn
    // edit the node -- check case if the next is null
    if (node.next === null) {
      this.tail = nodeToInsert
    } else {
      node.next.prev = nodeToInsert
    }
    // then we actually set node.next to node.insert
    node.next = nodeToInsert
  }

  // O(p) time | O(1) space
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) { // if position is 1, just set the head
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null & currentPosition++ !== position) node = node.next;
    if (node !== null) {
      this.insertBefore(node, nodeToInsert)
    } else {
      this.setTail(nodeToInsert);
    }

  }

  removeNodesWithValue(value) {
    // Write your code here.
    let node = this.head;
    // iterate through the linkedlist and remove
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove)
    }
  }

  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  }

  removeNodeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}


const list = new DoublyLinkedList();
list.setHead(new Node(8));
list.setHead(new Node(5));
list.setHead(new Node(3));
list.setHead(new Node(2));
list.setHead(new Node(1));
console.log(list);
console.log(list.printList(list.head));

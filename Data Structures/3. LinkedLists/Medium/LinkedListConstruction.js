// Todo 1 (Medium): Construct a DoublyLinkedList. Setting head and tail of the list, inser nodes before and after nodes, removing given nodes and removing nodes with given values, searching with given vals
// ! TAKEAWAYS: Remember that props are always passed through as copies, so we are not changing the actualy value. We must use the this.head or this.tail, which is why insertion is O(n)
// ? Solution 1: Time Complexity O(N) and Space Complexity O(N)

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null; // the previous makes this a doubly linkedlist
    this.next = null;
  }

}

//
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }


  // print out values in linked list
  print_list() {
    console.log("here")
    let node = this.head;
    const arr = [];
    while (node) {
      arr.push(node.value)
      node = node.next;
    }
    console.log(arr)
  }

  // should shift a value to the head
  setHead(node) {
    // if there is not head in the linkedlist, we must set it equal to the head and the tail
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.insertBefore(this.head, node);
    }
  }

  // if there is no tail, we just use set head -- else,
  setTail(node) {
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail = node;
    }
  }

  // insert before a certain node
  insertBefore(node, nodeToInsert) {
    // if it is the head
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) { }

  insertAtPosition(position, nodeToInsert) { }

  removeNodesWithValue(value) { }

  remove(node) { }

  containsNodeWithValue(value) { }
}

const list = new DoublyLinkedList();
list.setHead(new Node(8));
list.setHead(new Node(5));
list.setHead(new Node(3));
list.setHead(new Node(2));
list.setHead(new Node(1));
// list.setTail(new Node(80));
console.log(list);
list.print_list();

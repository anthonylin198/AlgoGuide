// Given the head of a linkedlist and a number 'k', reverse every 'k' sized sub-list starting from the head. If left with sub-list less than 'k' elemnts, reverse that too.

// input: 1,2,3,4,5,6,7,8,null   k = 3
// output: 3, 2, 1, 6, 5, 4, 8, 7

// ! fix this question after looking at number 1
// Complexit: O(N) time and O(1) space
class Node {
  // the data
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  // the functions
  print_list() {
    let temp = this;
    const arr = [];
    while (temp !== null) {
      arr.push(temp.value);
      temp = temp.next;
    }
    console.log(arr); // just logging a line
  }
}


function reverse_every_k_elements(head, k) {
  if (k <= 1 || head === null) {
    return head;
  }
  let current = head,
    previous = null;

  while (true) {
    const last_node_of_previous_part = previous;
    // after reversing the LinkedList 'current' will become the last node of the sub-list 
    const last_node_of_sub_list = current;
    let next = null; // will be used to temporarily store the next node
    let i = 0;
    // keep reversing the sublists of size k
    while (current !== null && i < k) { // reverse 'k' nodes
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i += 1;
    }
    // connect with the previous part
    if (last_node_of_previous_part !== null) {
      last_node_of_previous_part.next = previous;
    } else {
      head = previous;
    }
    // connect with the next part 
    last_node_of_sub_list.next = current;
    if (current === null) {
      break;
    }
    previous = last_node_of_sub_list;
  }
  return head;
}



const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

process.stdout.write('Nodes of original LinkedList are: '); head.print_list();

result = reverse_every_k_elements(head, 3);
process.stdout.write('Nodes of reversed LinkedList are: '); head.print_list()
const Node = require("./Node");
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  toString() {
    let string = "";
    let currentNode = this.head;
    while (currentNode) {
      string += `{${currentNode.value}} --> `;
      currentNode = currentNode.next;
    }
    string += `X`;
    return string;
  }

  zipLists(list1, list2) {
    let result = new LinkedList();
    let currentList1 = list1.head;
    let currentList2 = list2.head;
    while (currentList1 && currentList1) {
      result.append(currentList1.value);
      currentList1 = currentList1.next;
      result.append(currentList2.value);
      currentList2 = currentList2.next;
    }
    if (currentList1 !== "null") {
      result.tail.next = currentList1;
      result.tail = list1.tail;
    } else {
      result.tail.next = currentList2;
      result.tail = list2.tail;
    }
    result.length = list1.length + list2.length;
    return `${result.toString()}`;
  }
}
module.exports = LinkedList;

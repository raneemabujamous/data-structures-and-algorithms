const Node = require("./Node");
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.lenght += 1;
  }
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    const current = this.head;

    if (current.value === value) {
      newNode.next = current;
      this.head = newNode;
    }
    while (current) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    const current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
      current = current.next;
    }
  }
  insert(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  includes(value) {
    let result = false;
    let tempNode = this.head;
    while (tempNode) {
      if (tempNode.value === value) {
        return (result = true);
      }
      tempNode = tempNode.next;
    }
    return result;
  }

  toString() {
    let string = "";
    let tempNode = this.head;
    while (tempNode) {
      string += `{ ${tempNode.value} } -> `;
      tempNode = tempNode.next;
    }
    string += `NULL`;
    return string;
  }
}
module.exports = LinkedList;

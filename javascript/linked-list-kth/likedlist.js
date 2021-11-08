const Node = require("./Node");
class LinkedList {
  constructor() {
    this.head = null; //pointer
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
  linkedListKth(indexFromLast) {
    if (!this.head) {
      return "no node exist";
    } else {
      length = 0;
      let currentNode = this.head;
      while (currentNode.next) {
        length++;
        currentNode = currentNode.next;
      }
      if (indexFromLast > length) {
        return "Exception";
      }
      let requreIndex = length - indexFromLast;
      let increment = 0;
      currentNode = this.head;
      while (currentNode.next) {
        increment++;
        currentNode = currentNode.next;
        if (requreIndex === require) {
          return currentNode.value;
        }
      }
    }
  }
}
module.exports = LinkedList;

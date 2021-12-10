const Node = require("./Node");

class Stack {
  constructor() {
    this.length = 0;
    this.top = null;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.length + 1;
    } else {
      newNode.next = this.top;
      newNode = this.top;
      this.length + 1;
    }
  }
  pop() {
    if (!this.top) {
      return "cant delete empty stack";
    } else {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length - 1;
    }
    return this.temp;
  }
  peek() {
    return this.top.value;
  }
  isEmpty() {
    return this.top === null;
  }
  getMax() {
    if (!this.top) {
      return "empty stack";
    }
    let current = this.top;
    let max = 0;
    while (!this.isEmpty) {
      if (current.value > current.next.value) {
        max = current.value;
      }
      current = current.next;
    }
  }
}
module.exports = Stack;

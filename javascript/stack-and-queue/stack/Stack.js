const Node = require("./Node");
class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }
  push(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.top = newNode;
    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
    return this.top.value;
  }
  pop() {
    if (this.isEmpty()) {
      console.log("this is empty stack i cant delete ");
      return false;
    } else {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.value;
    }
  }
  peek() {
    if (this.isEmpty()) {
      console.log("this is empty stack i cant delete ");
      return "this is empty stack i cant delete ";
    } else {
      return this.top.value;
    }
  }
}
module.exports = Stack;

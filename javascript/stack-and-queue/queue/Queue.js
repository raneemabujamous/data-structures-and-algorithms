const Node = require("./Node");
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0;
  }
  enqueue(value) {
    let newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      this.length += 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length += 1;
      return this.front;
    }
  }

  dequee() {
    if (this.isEmpty()) {
      return "there is no node to remove ";
    } else {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length -= 1;
      return temp.value;
    }
  }
  peek() {
    if (this.isEmpty()) {
      return "there is no peek ";
    } else {
      return this.front.value;
    }
  }
}
module.exports = Queue;

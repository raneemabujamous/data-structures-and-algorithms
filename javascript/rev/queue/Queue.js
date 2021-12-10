const Node = require("./Node");
class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.length) {
      newNode = this.front;
      newNode = this.rear;
      this.length++;
    } else {
      this.rear.next = newNode;
      newNode = this.rear;
      this.length++;
    }
    return this.front;
  }
  dequeue() {
    if (!this.length) {
      return "empty queue";
    } else {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length - 1;
      return temp.value;
    }
  }
  peek() {
    return this.front.value;
  }
  isEmpty() {
    return this.length == 0;
  }
}
module.exports = Queue;

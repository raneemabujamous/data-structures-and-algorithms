const Stack = require("../stack/stack");

class QueueUsingStack {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }
  enqueue(value) {
    this.stackA.push(value);
  }
  dequeue() {
    if (this.stackB.isEmpty()) {
      while (this.stackA.top) {
        this.stackB.push(this.stackA.pop);
      }
      return this.stackB.pop();
    } else {
      return this.stackB.pop();
    }
  }
}
module.exports = QueueUsingStack;

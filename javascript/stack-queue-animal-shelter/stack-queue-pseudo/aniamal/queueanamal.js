const Queue = require("./Oueue");

class PseudoQueue {
  constructor() {
    this.QueueDog = new Queue();
    this.Queuecat = new Queue();
  }
  enqueue(animal) {
    if (animal === "dog") {
      this.QueueDog.enqueue(animal);
      return animal;
    } else if (animal === "cat") {
      this.Queuecat.enqueue(animal);
      return animal;
    } else {
      return "it is not cat or dog";
    }
  }
  dequeue(pref) {
    if (pref === "dog") {
      return this.QueueDog.dequee();
    } else if (pref === "cat") {
      return this.Queuecat.dequee();
    } else {
      return null;
    }
  }
}
module.exports = PseudoQueue;

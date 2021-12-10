const Queue = require("./Queue");

class AnimalShelter {
  constructor() {
    this.QueueDog = new Queue();
    this.QueueCat = new Queue();
  }
  enqueue(value) {
    if (value === "dog") {
      this.QueueDog.enqueue("dog");
    } else if (value === "cat") {
      this.QueueCat.enqueue("cat");
    } else {
      return "this not cat or dog ";
    }
  }
  dequeue(pref) {
    if (pref == "cat") {
      this.QueueCat.dequeue();
    } else if (pref == "dog") {
      this.QueueDog.dequeue();
    }else if (this.QueueDog && pre)
  }
}

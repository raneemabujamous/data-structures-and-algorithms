class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  // returning the all the values  from the linkedList
  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

// module.exports = LinkedList;
class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  getHash(key) {
    // we generate index spacific value we inteded inside function set
    const elementSum = key.split("").reduce((p, n) => p + n.charCodeAt(0), 0);
    const whitPrime = elementSum * 599;
    return whitPrime % this.size;
  }
  set(key, value) {
    const hash = this.getHash(key);
    const entry = { [key]: value };
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    this.map[hash].add(entry);
  }
  get(key) {
    const hash = this.getHash(key);
    return this.map[hash].head;
  }
  contain(key) {
    const hash = this.hash(key);
    if (this.map[hash]) {
      let current = this.map[hash].head;
      while (current) {
        if (current.value[key]) {
          return true;
        }
        current = current.next;
      }
    } else {
      return false;
    }
  }
}
module.exports = HashTable;

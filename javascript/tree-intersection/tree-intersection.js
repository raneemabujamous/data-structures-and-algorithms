const LinkedList = require("./LinkedList.js");
class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  getHash(key) {
    const sumCharCode = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }
  set(key, value) {
    const hashKey = this.getHash(key);
    if (!this.map[hashKey]) {
      this.map[hashKey] = new LinkedList();
    }
    const entry = { [key]: value };
    this.map[hashKey].add(entry);
  }
  get(key) {
    const hashed = this.getHash(key);
    return this.map[hashed].head;
  }

  contain(key) {
    const hashed = this.getHash[key];
    if (this.map[hashed]) {
      let current = this.map[hashed].head;
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
  treeIntersection(tree1, tree2) {
    let key;
    let result = [];
    let hash;
    let counter = 0;
    let _treverse = (node) => {
      key = node.value;
      this.set(key, "no value");
      if (counter > 0) {
        // this if just use in secound tree
        typeof key == "number" ? (hash = key) : this.getHash(key);
        if (this.map[hash].head.next) {
          // that mean if this value hashed before it will push it to result
          result.push(hash);
        }
      }
      if (node.left) {
        _treverse(node.left);
      }
      if (node.right) {
        _treverse(node.right);
      }
    };
    _treverse(tree1.root);
    counter++;

    _treverse(tree2.root);
    return result;
  }
  deplecatedWoerd(string) {
    // first we save string inside hash table then check if it was found
    const array = string.toLowerCase().split(" ");
    let key;
    let hash;
    for (let i = 0; i < array.length; i++) {
      let key = array[i];
      this.set(key, "");
      hash = this.getHash(key); // just to loop throw function
      if (this.map[hash].head.next) {
        return key;
      }
    }
  }
}
module.exports = HashMap;

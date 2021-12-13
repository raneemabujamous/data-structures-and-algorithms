const LinkedList = require("./LinkedList.js");
class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  getHash(key) {
    console.log(key, typeof key);
    const sumCharCode = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }

  set(key, value) {
    let hash;
    if (typeof key == "number") {
      hash = key;
    } else {
      hash = this.hash(key);
    }
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    let entry = { [key]: value };
    this.map[hash].add(entry);
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
  treeIntersection(firstTree, secondTree) {
    let key;
    let counter = 0;
    let hash;
    let results = [];
    let traverseTree = (node) => {
      key = node.value;
      this.set(key, "noValue");
      if (counter > 0) {
        typeof key === "number" ? (hash = key) : this.getHash(key);
        if (this.map[hash].head.next) {
          results.push(hash);
        }
      }
      if (node.left) {
        traverseTree(node.left);
      }
      if (node.right) {
        traverseTree(node.right);
      }
    };
    traverseTree(firstTree.root);
    counter++;
    traverseTree(secondTree.root);

    return results;
  }

  deplecatedWoerd(string) {
    // first we save string inside hash table then check if it was found
    const array = string.toLowerCase().split(" ");
    let key;
    let hash;
    for (let i = 0; i < array.length; i++) {
      key = array[i];
      this.set(key, "");
      hash = this.getHash(key); // just to loop throw function
      if (this.map[hash].head.next) {
        return key;
      }
    }
  }
}
module.exports = HashMap;

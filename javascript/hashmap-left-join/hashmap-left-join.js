const LinkedList = require("./LinkedList");

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size); // array of all of our value give it fix size
  }
  getHash(key) {
    // we use key to create index
    // refrence where key to create index
    const assciSum = key.split("").reduce((p, n) => p + n.charCodeAt(0), 0); // it take our key and hash it
    const withPrime = assciSum * 599; // it can be any number
    return withPrime % this.size; // here we generating aplace to our value
  }
  set(key, value) {
    // we went to add new value to hash table
    const hash = this.getHash(key);
    // we want to set that key to map proparity
    const entry = { key, value }; // create entry const to save our node object
    //// here we add new linked list every time we want to new hash doesnt exixit
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    // but if we have this hash we will chain it
    this.map[hash].add(entry); // this add function from linkedList if we using array push
  }
  // if we want to get the value of key hashed
  get(key) {
    const hash = this.getHash(key);
    return this.map[hash].head;
  }
  contain(key) {
    const hash = this.getHash(key);
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
  duplecatedWoord(string) {
    const array = string.toLowerCase().split(" ");
    let key;
    let hash;
    for (let i = 0; i < array.length; i++) {
      key = array[i];
      this.set(key, "");
      hash = this.getHash(key);
      if (this.map[hash].head.next) {
        return key;
      }
    }
  }
  leftJoin(hashmap1, hashmap2) {
    let result = [];
    let tempKey;
    let tempValue1;
    let tempValue2 = null;
    for (let i = 0; i < hashmap1.map.length; i++) {
      if (hashmap1.map[i]) {
        tempKey = Object.keys(hashmap1.map[i].head.value)[0];
        tempValue1 = Object.values(hashmap1.map[i].head.value)[0];
        if (hashmap2.contain(tempKey)) {
          tempValue2 = Object.values(hashmap2.map[i].head.value)[0];
        } else {
          tempValue2 = null;
        }
        result.push([tempKey, tempValue1, tempValue2]);
      }
    }
    return result;
  }
}
module.exports = HashTable;

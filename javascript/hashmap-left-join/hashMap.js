const LinkedList = require("./LinkedList");
const hashMap = require("./hashmap-left-join");
const leftJoin = (hashmap1, hashmap2) => {
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
};

module.exports = leftJoin;

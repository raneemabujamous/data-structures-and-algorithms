"use strict";
const Hashmap = require("../hashMap/hashTable");
describe("HASH TABLE ", () => {
  let hashTable;
  beforeAll(() => {
    hashTable = new Hashmap(5000);
    hashTable.set("name", "raneem");
    hashTable.set("age", "23");
    hashTable.set("education", "electricalengineering");
  });

  it("Adding a key/value ", () => {
    const hash1 = hashTable.getHash("name");
    const hash2 = hashTable.getHash("age");
    const hash3 = hashTable.getHash("education");
    expect(hashTable.map[hash1].head.value).toEqual({ name: "raneem" });
    expect(hashTable.map[hash2].head.value).toEqual({ age: "23" });
    expect(hashTable.map[hash3].head.value).toEqual({
      education: "electricalengineering",
    });
    expect(hashTable.map[hash3].head.value["education"]).toEqual(
      "electricalengineering"
    );
  });

  it("Retrieving based ", () => {
    expect(hashTable.get("name").value.name).toEqual("raneem");
    expect(hashTable.get("age").value.age).toEqual("23");
    expect(hashTable.get("education").value.education).toEqual(
      "electricalengineering"
    );
  });

  it("Successfully handle the hashtable", () => {
    hashTable.set("act", "Jonny Depp");
    const hash3 = hashTable.getHash("education");
    expect(hashTable.map[hash3].head.value).toEqual({
      education: "electricalengineering",
    });
  });

  it("Successfully hash a key to an in-range value", () => {
    const hashINRange = hashTable.getHash("name");

    expect(hashINRange).toBeLessThan(hashTable.map.length);
    expect(hashINRange).toBeLessThan(5000);
  });
});

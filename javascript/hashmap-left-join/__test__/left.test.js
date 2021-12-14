"use strict";

const leftJoin = require("../hashMap");
const Hashmap = require("../hashmap-left-join");
Hashmap;
describe("left join", () => {
  let test1 = new Hashmap(300);
  let test2 = new Hashmap(300);
  let test3 = new Hashmap(300);
  let test4 = new Hashmap(300);

  test1.set("fond", "enamored");
  test1.set("wrath", "anger");
  test1.set("diligent", "employed");
  test1.set("outift", "grab");
  test1.set("guide", "usher");

  test2.set("fond", "averse");
  test2.set("wrath", "delight");
  test2.set("diligent", "idle");
  test2.set("guide", "follow");
  test2.set("flow", "jam");

  it("return empty array if the left hash table is empty ", () => {
    expect(leftJoin(test3, test2)).toStrictEqual([]);
  });

  it("return null for the second value if no match in the right hashtabel", () => {
    expect(leftJoin(test1, test4)[0][2]).toStrictEqual(null);
  });
});

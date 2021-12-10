const Hashmap = require("../index.js");

describe("FIRST REPEATED WORD TESTS", () => {
  it("1.successfuly return the first repeated word in a book", () => {
    let hashTable = new Hashmap(5000);

    let string = "Once upon a time, there was a brave princess who...";
    expect(hashTable.duplecatedWoord(string)).toEqual("a");
  });
});

"use strict";

const LinkedList = require("../LinkedList");

describe("linked-list zip ", () => {
  it("zipLists  Happy case", () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);

    let list2 = new LinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(6);
    let newList = new LinkedList();
    expect(newList.zipLists(list1, list2)).toEqual(
      "{1}-->{2}-->{3}-->{4}-->{5}-->{6}-->null"
    );
  });
});

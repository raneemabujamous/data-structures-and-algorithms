"use strict";
const LinkedList = require("../likedlist");
describe("test all", () => {
  it("can do linkedlist", () => {
    const ll = new LinkedList();
    expect(ll).toBeInstanceOf(LinkedList);
    expect(ll.head).toBeNull();
  });
  it("Adds new value to head", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    expect(ll.head.value).toBe("test1");
    expect(ll.head.next).toBeNull();
  });

  it("test insert ", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    ll.insert("test3");

    expect(ll.head.value).toBe("test3");
    expect(ll.head.next).toBeTruthy();
  });
  it("test insert multiple linked list ", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    ll.insert("test3");

    expect(ll.head.value).toBe("test3");
    expect(ll.head.next.value).toBe("test2");
    expect(ll.head.next.next.value).toBe("test1");
    expect(ll.head.next.next.next).toBeNull();
  });
  it(" test if true", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    expect(ll.includes("test2")).toBe(true);
  });
  it("test false ", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    expect(ll.includes("test3")).toBe(false);
  });

  it("test sll", () => {
    const ll = new LinkedList();
    ll.insert("test3");
    ll.insert("test2");
    ll.insert("test1");

    expect(ll.toString()).toBe("{ test1 } -> { test2 } -> { test3 } -> NULL");
  });
});

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
    ll.append("test1");
    expect(ll.head.value).toBe("test1");
    expect(ll.head.next).toBeNull();
  });

  it("test insert ", () => {
    const ll = new LinkedList();
    ll.append("test1");
    ll.append("test2");
    ll.append("test3");

    expect(ll.head.value).toBe("test1");
    expect(ll.head.next).toBeTruthy();
  });
  it("test insert multiple linked list ", () => {
    const ll = new LinkedList();
    ll.append("test1");
    ll.append("test2");
    ll.append("test3");

    expect(ll.head.value).toBe("test1");
    expect(ll.head.next.value).toBe("test2");
    expect(ll.head.next.next.value).toBe("test3");
    expect(ll.head.next.next.next).toBeNull();
  });
  test("returns the value ", () => {
    const ll = new LinkedList();
    ll.append("1");
    ll.append("3");
    ll.append("8");
    ll.append("2");
    expect(ll.linkedListKth(0)).toBe("2");
    expect(ll.linkedListKth(2)).toBe("3");
  });
  test("k > length ", () => {
    const ll = new LinkedList();
    ll.append("1");
    ll.append("3");
    ll.append("8");
    ll.append("2");
    expect(ll.linkedListKth(0)).toBe("2");
    expect(ll.linkedListKth(2)).toBe("3");
  });
});

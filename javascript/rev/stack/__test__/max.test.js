const Stack = require("../Stack");
describe("test stack operation", () => {
  test("should push", () => {
    const newStck = new Stack();
    newStck.push(1);
    newStck.push(2);
    newStck.push(3);
    expect(newStck.top.value).toBe(3);
    expect(newStck.top.next.value).toBe(2);
    expect(newStck.top.next.next.value).toBe(1);
    expect(newStck.top.next.next.next).toBeNull();
  });
  test("should push", () => {
    const newStck = new Stack();
    newStck.push(1);
    newStck.push(2);
    newStck.push(3);
    newStck.pop();
    expect(newStck.top.value).toBe(2);
  });
  test("should push", () => {
    const newStck = new Stack();
    newStck.push(1);
    newStck.push(2);
    newStck.push(3);
    newStck.getMax();
    expect(newStck.getMax()).toBe(3);
  });
});

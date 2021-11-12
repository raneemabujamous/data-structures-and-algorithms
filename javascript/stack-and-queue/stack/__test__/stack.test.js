"usr strict";
const Stack = require("../Stack");

describe("stack file", () => {
  test("it can push new node to stack", () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);

    expect(newStack.top.value).toBe(3);
    expect(newStack.top.next.value).toBe(2);
    expect(newStack.top.next.next.value).toBe(1);
    expect(newStack.top.next.next.next).toBe(null);
  });
  test("it can remove", () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.pop()).toBe(3);
  });
  test("can return the peek value", () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.peek()).toBe(3);
  });
});

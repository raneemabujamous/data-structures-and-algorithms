const pesdoQueue = require("../pseudoqueue/queueusingstak");
describe("implentation work", () => {
  test("should push", () => {
    const newQueue = new pesdoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.stackA.top.value).toBe(3);
    expect(newQueue.stackA.top.next.value).toBe(2);
    expect(newQueue.stackA.top.next.next.value).toBe(1);
    expect(newQueue.stackA.top.next.next.next).toBeNull();
  });
  test("should pop", () => {
    const newQueue = new pesdoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);

    expect(newQueue.dequeue()).toBe(1);
    expect(newQueue.dequeue()).toBe(2);
    expect(newQueue.dequeue()).toBe(3);
    // expect(newQueue.stackA.top.next.next.next).toBeNull();
  });
});

const Queue = require("../Queue");
describe("queue", () => {
  test("enqueue value ", () => {
    const nwmQueue = new Queue();
    nwmQueue.enqueue(1);
    nwmQueue.enqueue(2);
    nwmQueue.enqueue(3);
    expect(nwmQueue.front.value).toBe(1);
    expect(nwmQueue.front.next.value).toBe(2);
    expect(nwmQueue.front.next.next.value).toBe(3);
    expect(nwmQueue.front.next.next.next).toBe(null);
  });
  test("dequeue value", () => {
    const nwmQueue = new Queue();
    nwmQueue.enqueue(1);
    nwmQueue.enqueue(2);
    nwmQueue.enqueue(3);

    expect(nwmQueue.dequee()).toBe(1);
  });
  test("can return peek", () => {
    const nwmQueue = new Queue();
    nwmQueue.enqueue(1);
    nwmQueue.enqueue(2);
    nwmQueue.enqueue(3);
    expect(nwmQueue.peek()).toBe(1);
  });
});

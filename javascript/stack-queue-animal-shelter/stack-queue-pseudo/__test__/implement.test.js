const pesdoQueue = require("../aniamal/queueanamal");
describe("implentation work", () => {
  test("should enqueue dog", () => {
    const newQueue = new pesdoQueue();
    newQueue.enqueue("dog");
    newQueue.enqueue("dog");
    newQueue.enqueue("dog");
    expect(newQueue.QueueDog.front.value).toBe("dog");
    expect(newQueue.QueueDog.front.next.value).toBe("dog");
    expect(newQueue.QueueDog.rear.value).toBe("dog");
    expect(newQueue.QueueDog.front.next.next.next).toBeNull();
  });

  test("should enqueue cat", () => {
    const newQueue = new pesdoQueue();
    newQueue.enqueue("cat");
    newQueue.enqueue("cat");
    newQueue.enqueue("cat");
    expect(newQueue.Queuecat.front.value).toBe("cat");
    expect(newQueue.Queuecat.front.next.value).toBe("cat");
    expect(newQueue.Queuecat.rear.value).toBe("cat");
    expect(newQueue.Queuecat.front.next.next.next).toBeNull();
  });
  test("should enqueue cat", () => {
    const newQueue = new pesdoQueue();
    newQueue.enqueue("cat");
    newQueue.enqueue("cat");
    newQueue.enqueue("cat");

    expect(newQueue.dequeue("cat")).toBe("cat");
    // expect(newQueue.dequeue()).toBe("cat");
    // expect(newQueue.dequeue()).toBe("cat");
    // expect(newQueue.stackA.top.next.next.next).toBeNull();
  });
});

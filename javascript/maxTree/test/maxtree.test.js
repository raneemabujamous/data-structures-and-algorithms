const Node = require("../Node");
const BinaryTree = require("../maxValueTree");
describe("test max value", () => {
  test("should give max", () => {
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(4);
    const d = new Node(7);
    const f = new Node(9);

    let newTree = new BinaryTree(a);
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = f;
    expect(newTree.maxValue()).toBe(9);
  });
});

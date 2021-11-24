const Node = require("../Node");

const BinaryTree = require("../binaryTree");
const breathFirst = require("../breadthFirst");
describe("it order line by line ", () => {
  test("should order line by line ", () => {
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);
    const f = new Node(5);
    let newTree = new BinaryTree(a);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = f;
    let rseult = [1, 2, 3, 4, 5];
    expect(breathFirst(newTree)).toEqual(rseult);
  });
});

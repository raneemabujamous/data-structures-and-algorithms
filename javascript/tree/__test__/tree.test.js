const Binary = require("../tree");
const Node = require("../Node");
describe("test binary", () => {
  test("should give right and left", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    let tree = new Binary(a);
    a.left = c;
    a.right = b;
    expect(tree.root.value).toBe("a");
    expect(tree.root.left.value).toBe("c");
    expect(tree.root.right.value).toBe("b");
  });

  it("test in order", () => {
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);
    const e = new Node(5);
    const f = new Node(6);
    const g = new Node(7);

    let tree = new Binary(a);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;

    let rseult = [4, 2, 5, 1, 6, 3, 7];
    expect(tree.InOrder()).toEqual(rseult);
  });
  //   it("test PreOrder", () => {
  //     const a = new Node("a");
  //     const b = new Node("b");
  //     const c = new Node("c");
  //     const d = new Node("d");
  //     const e = new Node("e");
  //     const f = new Node("f");
  //     const g = new Node("g");

  //     let tree = new Binary(a);

  //     a.left = b;
  //     a.right = c;
  //     b.left = d;
  //     b.right = e;
  //     c.left = f;
  //     c.right = g;

  //     let rseult = ["a", "b", "d", "e", "c", "f", "g"];
  //     expect(tree.PreOrder()).toEqual(rseult);
  //   });

  it(" test postOrder", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");

    let tree = new Binary(a);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;

    let rseult = ["d", "e", "b", "f", "g", "c", "a"];
    expect(tree.PostOrder()).toEqual(rseult);
  });
});

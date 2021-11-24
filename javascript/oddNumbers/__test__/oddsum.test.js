const Binarytree = require("../binaryTree");
const Node = require("../Node");
const oddSum = require("../oddSum");
describe("test odd sum fun", () => {
  test("should give sum of odd ", () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    one.left = two;
    one.right = three;
    two.right = four;
    two.left = five;
    three.left = six;
    let tree = new Binarytree(one);
    let result = 9;
    console.log(oddSum(tree));
    expect(oddSum(tree)).toBe(result);
  });
});

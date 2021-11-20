const Node = require("./Node");
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  PreOrder() {
    let array = [];
    const _throwArray = (node) => {
      array.push(node.value);
      if (node.left) {
        _throwArray(node.left);
      }
      if (node.right) {
        _throwArray(node.right);
      }
      _throwArray(this.root);
      return array;
    };
  }

  maxValue() {
    let maxValue;
    let _searchMax = (node) => {
      if (!maxValue) {
        maxValue = node.value;
      }
      if (node.value > maxValue) {
        maxValue = node.value;
      }
      if (node.left) {
        _searchMax(node.left);
      }
      if (node.right) {
        _searchMax(node.right);
      }
    };
    _searchMax(this.root);
    return maxValue;
  }
}
module.exports = BinaryTree;

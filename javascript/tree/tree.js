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
  PostOrder() {
    let array = [];
    const _throwArray = (node) => {
      if (node.left) {
        _throwArray(node.left);
      }
      if (node.right) {
        _throwArray(node.right);
      }
      array.push(node.value);
    };
    _throwArray(this.root);
    return array;
  }
  InOrder() {
    let array = [];
    const _throwArray = (node) => {
      if (node.left) {
        _throwArray(node.left);
      }
      array.push(node.value);
      if (node.right) {
        _throwArray(node.right);
      }
    };
    _throwArray(this.root);
    return array;
  }
}
module.exports = BinaryTree;

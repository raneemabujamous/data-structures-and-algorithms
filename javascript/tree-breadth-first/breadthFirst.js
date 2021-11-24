// const Node = require("./Node");
// class BinaryTree {
//   constructor(root = null) {
//     this.root = root;
//   }
//   PreOrder() {
//     let array = [];
//     const _throwArray = (node) => {
//       array.push(node.value);
//       if (node.left) {
//         _throwArray(node.left);
//       }
//       if (node.right) {
//         _throwArray(node.right);
//       }
//       _throwArray(this.root);
//       return array;
//     };
//   }
let breathFirst = (tree) => {
  const queue = [];
  queue.push(tree.root.value);

  const _orderBreathFirst = (node) => {
    queue.push(node.left.value);
    queue.push(node.right.value);
    if (node.left.left) {
      _orderBreathFirst(node.left);
    }
    if (node.right.right) {
      _orderBreathFirst(node.right);
    }
  };
  _orderBreathFirst(tree.root);
  return queue;
};
// }
module.exports = breathFirst;

oddSum = (tree) => {
  let result = 0;
  _sumNum = (node) => {
    if (node.value % 2 !== 0) {
      result += node.value;
      // console.log(node.value);
    }
    if (node.left) {
      _sumNum(node.left);
    }
    if (node.right) {
      _sumNum(node.right);
    }
  };
  _sumNum(tree.root);
  return result;
};
module.exports = oddSum;

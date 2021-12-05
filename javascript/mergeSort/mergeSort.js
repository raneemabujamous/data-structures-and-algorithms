const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);
  console.log(left, "from left inside one");
  console.log(right, "from right inside one");
  return merge(mergeSort(left), mergeSort(right)); //use recursion to continue splitting call mehtod inside method
};
const merge = (left, right) => {
  console.log(left, "from left inside tow");
  console.log(right, "from right inside tow");
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift()); //shift : pop first element in left aray and push it into result array
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

module.exports = mergeSort;

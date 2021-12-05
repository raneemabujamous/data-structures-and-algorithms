function quikSort(array) {
  if (array.length == 1) {
    return array;
  }
  const pivot = array[array.length - 1]; // store last element
  const leftArr = []; //to store values less than pivot element
  const rightArr = []; //to store values larger  than pivot element
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quikSort(leftArr), pivot, ...quikSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quikSort(leftArr), pivot];
  } else {
    return [pivot, ...quikSort(rightArr)];
  }
}
module.exports = quikSort;

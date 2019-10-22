const quickSort = (array, sort = 'asc') => {
  if (array.length === 1 || array.length === 0) {
    return array;
  }
  let pivot = array[0];
  let left = [];
  let right = [];
  for (var i = 1; i < array.length; i++) {
    if (sort === 'asc') {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    } else {
      if (array[i] >= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }
  let outputArray = [];

  if (left.length > 0) {
    outputArray = outputArray.concat(quickSort(left,sort));
  }
  outputArray = outputArray.concat([pivot]);
  if (right.length > 0) {
    outputArray = outputArray.concat(quickSort(right,sort));
  }
  return outputArray;
}

// console.log(quickSort([4,7,2,5,6], 'desc'))

module.exports = quickSort;
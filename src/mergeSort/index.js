export function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let arrLeft = mergeSort(arr.slice(0, middle));
  let arrRight = mergeSort(arr.slice(middle));

  return mergeArr(arrLeft, arrRight);
}

export function mergeArr(arrA, arrB) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arrA.length && j < arrB.length) {
    if (arrB[j] > arrA[i]) {
      result.push(arrA[i]);
      i += 1;
    } else {
      result.push(arrB[j]);
      j += 1;
    }
  }

  while (i < arrA.length) {
    result.push(arrA[i]);
    i += 1;
  }

  while (j < arrB.length) {
    result.push(arrB[j]);
    j += 1;
  }

  return result;
}

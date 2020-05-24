export function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);

    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

export function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex += 1;
      swap(arr, swapIndex, i);
    }

    swap(arr, start, swapIndex);
  }

  return swapIndex;
}

function swap(arr, first, second) {
  let tmp = arr[first];
  arr[first] = arr[second];
  arr[second] = tmp;
}

export function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minValueIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        minValueIndex = j;
      }
    }

    swap(arr, i, minValueIndex);
  }
  return arr;
}

function swap(arr, first, second) {
  let tmp = arr[first];
  arr[first] = arr[second];
  arr[second] = tmp;
}

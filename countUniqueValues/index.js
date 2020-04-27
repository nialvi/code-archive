export function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let firstPointer = 0;
  let secondPointer = 1;
  // without this copy, space complexity is O(1), but array is mutated
  let copyArr = [...arr];

  while (secondPointer < copyArr.length) {
    if (copyArr[firstPointer] !== copyArr[secondPointer]) {
      firstPointer += 1;
      copyArr[firstPointer] = copyArr[secondPointer];
    }

    secondPointer += 1;
  }

  return firstPointer + 1;
}

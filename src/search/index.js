export function search(array, value) {
  let min = 0;
  let max = array.length;

  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    let number = array[middle];

    if (!number) {
      break;
    }

    if (number < value) {
      min = middle + 1;
    } else if (number > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

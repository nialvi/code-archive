export function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }

    nums = [].concat(...digitBuckets);
  }
  return nums;
}

export function getDigit(number, place) {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

export function digitCount(num) {
  if (num === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export function mostDigits(arr) {
  let maxDigit = 0;

  arr.forEach((num) => {
    maxDigit = Math.max(maxDigit, digitCount(num));
  });

  return maxDigit;
}

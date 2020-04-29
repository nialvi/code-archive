export function maxSubarraySum(arr, num = 1) {
  if (num > arr.length) {
    return null;
  }

  let maxSum = Infinity;
  let tmpSum = 0;
  for (let index = 0; index < num; index++) {
    tmpSum += arr[index];
  }

  maxSum = tmpSum;

  for (let index = num; index < arr.length; index++) {
    tmpSum = maxSum - arr[index - num] + arr[index];

    if (tmpSum > maxSum) {
      maxSum = tmpSum;
    }
  }

  return maxSum;
}

import { maxSubarraySum } from ".";

describe("maxSubarraySum", () => {
  it("should find nothing and return null", () => {
    expect(maxSubarraySum([])).toBe(null);
    expect(maxSubarraySum([], 5)).toBe(null);
    expect(maxSubarraySum([1, 2, 3], 5)).toBe(null);
  });

  it("should find value", () => {
    expect(maxSubarraySum([1, 1, 1, 1, 1, 1, 2], 3)).toBe(4);
    expect(maxSubarraySum([1, 1, 2, 2, 5, 6, 7, 7, 11], 2)).toBe(18);
    expect(maxSubarraySum([2, 3, 1, 5, 6], 3)).toBe(12);
  });
});

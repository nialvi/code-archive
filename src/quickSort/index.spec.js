import { quickSort, pivot } from ".";

describe("quickSort", () => {
  it("should return sorted array", () => {
    expect(quickSort([3, 1, 4, 6, 1, 2, 9, 4, 11])).toEqual([
      1,
      1,
      3,
      2,
      4,
      6,
      4,
      9,
      11,
    ]);
  });

  it("should return right pivot", () => {
    expect(pivot([4, 8, 2, 1, 5, 7, 6, 3])).toBe(3);
    expect(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3])).toBe(8);
    expect(pivot([2, 4, 8, 2, 1, 5, 7, 6, 3])).toBe(1);
  });
});

import { selectionSort } from ".";

describe("selectionSort", () => {
  it("should return sorted array", () => {
    expect(selectionSort([5, 1, 3, 6, 1, 9])).toEqual([1, 1, 3, 5, 6, 9]);
  });

  it("should return same array", () => {
    expect(selectionSort([])).toEqual([]);
  });
});

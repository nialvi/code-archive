import { mergeSort, mergeArr } from ".";

describe("mergeSort", () => {
  it("should return empty arr", () => {
    expect(mergeSort([])).toEqual([]);
  });

  it("should return sorted arr", () => {
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(mergeSort([3, 4, 1, 5, 6, 1])).toEqual([1, 1, 3, 4, 5, 6]);
  });

  it("merge Array", () => {
    expect(mergeArr([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(mergeArr([2, 4, 9], [2, 3])).toEqual([2, 2, 3, 4, 9]);
    expect(mergeArr([], [2, 3])).toEqual([2, 3]);
  });
});

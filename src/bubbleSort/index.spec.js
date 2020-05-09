import { bubbleSort } from ".";
import { reverseBubbleSort } from ".";

describe("bubbleSort", () => {
  it("should be sorted", () => {
    expect(bubbleSort([3, 1, 5, 2, 3])).toEqual([1, 2, 3, 3, 5]);
  });

  it("should return same array", () => {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe("reverseBubbleSort", () => {
  it("should be sorted", () => {
    expect(reverseBubbleSort([3, 1, 5, 2, 3])).toEqual([1, 2, 3, 3, 5]);
  });

  it("should return same array", () => {
    expect(reverseBubbleSort([])).toEqual([]);
  });
});

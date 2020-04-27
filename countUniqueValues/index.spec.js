import { countUniqueValues } from ".";

describe("countUniqueValues", () => {
  it("should find nothing and return zero", () => {
    expect(countUniqueValues([])).toBe(0);
  });

  it("should find value", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 1, 2, 2, 5, 6, 7, 7, 11])).toBe(6);
    expect(countUniqueValues([-1, -1, -2, -2, -5, 6])).toBe(4);
  });
});

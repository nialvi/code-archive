import { search } from ".";

describe("search", () => {
  it("should find nothing and return -1", () => {
    expect(search([], 1)).toBe(-1);
    expect(search([1, 2, 3], 11)).toBe(-1);
  });

  it("should find value", () => {
    expect(search([1, 2, 3, 6, 8, 10, 12], 1)).toBe(0);
    expect(search([1, 2, 4, 8, 16, 32, 64], 16)).toBe(4);
    expect(search([1, 2, 3, 5, 55, 100, 210], 210)).toBe(6);
  });
});

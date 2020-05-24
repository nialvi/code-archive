import { radixSort, getDigit, digitCount, mostDigits } from ".";

describe("radixSort", () => {
  it("should return sorted array ", () => {
    expect(radixSort([1, 22, 331, 33212, 45, 11, 231, 33])).toEqual([
      1,
      11,
      22,
      33,
      45,
      231,
      331,
      33212,
    ]);
  });

  it("sould correct digit", () => {
    expect(getDigit(7321, 0)).toBe(1);
    expect(getDigit(7321, 3)).toBe(7);
    expect(getDigit(-7321, 2)).toBe(3);
    expect(getDigit(-7321, 12)).toBe(0);
  });

  it("sould correct digit count", () => {
    expect(digitCount(0)).toBe(1);
    expect(digitCount(1)).toBe(1);
    expect(digitCount(21)).toBe(2);
    expect(digitCount(321)).toBe(3);
    expect(digitCount(-321)).toBe(3);
    expect(digitCount(-21)).toBe(2);
  });

  it("sould correct max digits", () => {
    expect(mostDigits([1, 22, 33, 444])).toBe(3);
    expect(mostDigits([1, 1, 1, 1])).toBe(1);
    expect(mostDigits([1111, 1, 1, 1])).toBe(4);
  });
});

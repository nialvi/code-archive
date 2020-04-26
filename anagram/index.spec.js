import { validAnagram } from ".";

describe("anagram", () => {
  it("should be valid", () => {
    expect(validAnagram("", "")).toBe(true);
    expect(validAnagram("aab", "baa")).toBe(true);
    expect(validAnagram("awesome", "someawe")).toBe(true);
  });

  it("should be invalid", () => {
    expect(validAnagram("", "1")).toBe(false);
    expect(validAnagram("aab", "bba")).toBe(false);
  });
});

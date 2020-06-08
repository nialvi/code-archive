import { stack, Stack } from ".";

describe("stack", () => {
  describe("push", () => {
    it("should push when stack is empty", () => {
      const stack = new Stack();
      stack.push("hello");

      expect(stack.size).toBe(1);
      expect(stack.first.value).toBe("hello");
      expect(stack.last.value).toBe("hello");
    });

    it("should push when stack is not empty", () => {
      const stack = new Stack();
      stack.push("hello").push("world").push("!");

      expect(stack.size).toBe(3);
      expect(stack.first.value).toBe("!");
      expect(stack.last.value).toBe("hello");
    });
  });

  describe("pop", () => {
    it("should return null when stack is empty", () => {
      const stack = new Stack();

      expect(stack.pop()).toBe(null);
      expect(stack.size).toBe(0);
      expect(stack.first).toBe(null);
      expect(stack.last).toBe(null);
    });

    it("should return value of first item", () => {
      const stack = new Stack();
      stack.push("hello").push("world").push("!");

      expect(stack.pop()).toBe("!");
      expect(stack.size).toBe(2);
      expect(stack.first.value).toBe("world");
      expect(stack.last.value).toBe("hello");
    });

    it("should return value when stack had only one item", () => {
      const stack = new Stack();
      stack.push("hello");

      expect(stack.pop()).toBe("hello");
      expect(stack.size).toBe(0);
      expect(stack.first).toBe(null);
      expect(stack.last).toBe(null);
    });
  });
});

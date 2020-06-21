import { Queue } from ".";

describe("queue", () => {
  it("should init empty queue", () => {
    const queue = new Queue();

    expect(queue.first).toBe(null);
    expect(queue.last).toBe(null);
    expect(queue.size).toBe(0);
  });

  describe("enqueue", () => {
    it("should enqueue in an empty queue", () => {
      const queue = new Queue();

      queue.enqueue(42);

      expect(queue.first.value).toBe(42);
      expect(queue.last.value).toBe(42);
      expect(queue.size).toBe(1);
    });

    it("should enqueue in not an empty queue", () => {
      const queue = new Queue();

      queue.enqueue(42).enqueue(69).enqueue(13);

      expect(queue.first.value).toBe(42);
      expect(queue.last.value).toBe(13);
      expect(queue.size).toBe(3);
    });
  });

  describe("dequeue", () => {
    it("should return null from empty queue", () => {
      const queue = new Queue();
      expect(queue.dequeue()).toBe(null);
    });

    it("should dequeue from a queue of one element", () => {
      const queue = new Queue();
      queue.enqueue(42);
      expect(queue.dequeue()).toBe(42);
      expect(queue.first).toBe(null);
      expect(queue.last).toBe(null);
      expect(queue.size).toBe(0);
    });

    it("should return elements of queue", () => {
      const queue = new Queue();
      queue.enqueue(42).enqueue(13).enqueue(63);

      expect(queue.dequeue()).toBe(42);
      expect(queue.first.value).toBe(13);
      expect(queue.last.value).toBe(63);
      expect(queue.size).toBe(2);

      expect(queue.dequeue()).toBe(13);
      expect(queue.first.value).toBe(63);
      expect(queue.last.value).toBe(63);
      expect(queue.size).toBe(1);
    });
  });
});

import { DoublyLinkedList, Node } from ".";

describe("doublyLinkedList", () => {
  it("should doubly links node", () => {
    const node = new Node(42);
    expect(node.value).toBe(42);
    expect(node.next).toBe(null);
    expect(node.prev).toBe(null);
  });

  it("should be empty doubly linked list", () => {
    const list = new DoublyLinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.length).toBe(0);
  });

  it("should be push value", () => {
    const list = new DoublyLinkedList();

    list.push(42);

    expect(list.head.value).toBe(42);
    expect(list.tail.value).toBe(42);
    expect(list.length).toBe(1);

    list.push(13);
    expect(list.head.value).toBe(42);
    expect(list.tail.value).toBe(13);
    expect(list.tail.prev.value).toBe(42);
    expect(list.length).toBe(2);
  });

  describe("pop", () => {
    it("should return null", () => {
      const list = new DoublyLinkedList();

      expect(list.pop()).toBe(null);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });

    it("should return empty list", () => {
      const list = new DoublyLinkedList();
      list.push(42);

      let val = list.pop();

      expect(val.value).toBe(42);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });

    it("should stay one item in list", () => {
      const list = new DoublyLinkedList();
      list.push(42);
      list.push(13);

      let val = list.pop();

      expect(val.value).toBe(13);
      expect(list.head.value).toBe(42);
      expect(list.tail.value).toBe(42);
      expect(list.tail.next).toBe(null);
      expect(list.length).toBe(1);
    });
  });

  describe("shift", () => {
    it("should return null when empty list", () => {
      const list = new DoublyLinkedList();
      expect(list.shift()).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.head).toBe(null);
      expect(list.length).toBe(0);
    });

    it("should be empty list when it had only one item", () => {
      const list = new DoublyLinkedList();
      list.push(42);

      expect(list.shift().value).toBe(42);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });

    it("should remove only head item", () => {
      const list = new DoublyLinkedList();

      list.push(42).push(13).push(69);

      expect(list.shift().value).toBe(42);
      expect(list.head.value).toBe(13);
      expect(list.tail.value).toBe(69);
      expect(list.length).toBe(2);
    });
  });
});

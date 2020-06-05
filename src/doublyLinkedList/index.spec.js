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

  describe("unshift", () => {
    it("should be one item in list", () => {
      const list = new DoublyLinkedList();
      list.unshift(42);

      expect(list.length).toBe(1);
      expect(list.head.value).toBe(42);
      expect(list.tail.value).toBe(42);
    });

    it("should be add item in first place", () => {
      const list = new DoublyLinkedList();
      list.push(42).push(13);
      list.unshift(69);

      expect(list.length).toBe(3);
      expect(list.head.value).toBe(69);
      expect(list.head.prev).toBe(null);
      expect(list.tail.value).toBe(13);
    });
  });

  describe("get", () => {
    it("should return null when get index incorrect", () => {
      const list = new DoublyLinkedList();
      list.push(42).push(13);

      expect(list.get(-11)).toBe(null);
      expect(list.get(11)).toBe(null);
    });

    it("should be get correct item from list", () => {
      const list = new DoublyLinkedList();
      list.push(42).push(13).push(69).push(11);

      expect(list.get(0).value).toBe(42);
      expect(list.get(2).value).toBe(69);
      expect(list.get(3).value).toBe(11);
    });
  });
});

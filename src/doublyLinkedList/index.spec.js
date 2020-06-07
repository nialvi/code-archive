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

  describe("set", () => {
    it("should not set value", () => {
      const list = new DoublyLinkedList();
      list.push(42).push(13).push(11);

      expect(list.set(69, 11)).toBe(false);
    });

    it("should set new value", () => {
      const list = new DoublyLinkedList();
      list.push(42).push(13).push(11);

      expect(list.set(69, 1)).toBe(true);
      expect(list.get(1).value).toBe(69);
    });
  });

  describe("insert", () => {
    it("should return false", () => {
      const list = new DoublyLinkedList();
      list.push(13).push(69).push(11);

      expect(list.insert(100, -11)).toBe(false);
      expect(list.insert(100, 11)).toBe(false);
    });

    describe("should return true with correct insert", () => {
      it("should insert in first place", () => {
        const list = new DoublyLinkedList();
        list.push(13).push(69).push(11);

        expect(list.insert(100, 0)).toBe(true);
        expect(list.head.value).toBe(100);
        expect(list.head.prev).toBe(null);
        expect(list.length).toBe(4);
      });

      it("should insert in last place", () => {
        const list = new DoublyLinkedList();
        list.push(13).push(69).push(11);

        expect(list.insert(100, 3)).toBe(true);
        expect(list.tail.value).toBe(100);
        expect(list.tail.prev.value).toBe(11);
        expect(list.length).toBe(4);
      });

      it("should insert in some place", () => {
        const list = new DoublyLinkedList();
        list.push(13).push(69).push(11);
        const result = list.insert(100, 1);
        const item = list.get(1);

        expect(result).toBe(true);
        expect(item.value).toBe(100);
        expect(item.next.value).toBe(69);
        expect(item.prev.value).toBe(13);
        expect(list.length).toBe(4);
      });
    });
  });

  describe("remove", () => {
    it("should not remove item and return null", () => {
      const list = new DoublyLinkedList();
      expect(list.remove(-10)).toBe(null);
      expect(list.remove(100)).toBe(null);
    });

    describe("remove item", () => {
      it("should not remove first item", () => {
        const list = new DoublyLinkedList();
        list.push(13).push(69).push(42);

        expect(list.remove(0).value).toBe(13);
        expect(list.length).toBe(2);
        expect(list.head.value).toBe(69);
      });

      it("should not remove last item", () => {
        const list = new DoublyLinkedList();
        list.push(13).push(69).push(42);

        expect(list.remove(2).value).toBe(42);
        expect(list.length).toBe(2);
        expect(list.tail.value).toBe(69);
      });

      it("should not remove some item", () => {
        const list = new DoublyLinkedList();
        list.push(13).push(69).push(42);

        expect(list.remove(1).value).toBe(69);
        expect(list.length).toBe(2);
        expect(list.head.next.value).toBe(42);
      });
    });
  });
});

import { SinglyLinkedList, Node } from ".";

describe("Node", () => {
  it("should return correct Node", () => {
    let node = new Node(1);

    expect(node.value).toBe(1);
    expect(node.next).toBe(null);
  });
});

describe("singlyLinkedList", () => {
  it("should init empty list", () => {
    const list = new SinglyLinkedList();
    expect(list.length).toBe(0);
    expect(list.tail).toBe(null);
    expect(list.head).toBe(null);
  });

  it("should push nodes in list", () => {
    const list = new SinglyLinkedList();
    list.push(42);

    expect(list.length).toBe(1);
    expect(list.head.value).toBe(42);
    expect(list.head.next).toEqual(list.head);
    expect(list.tail.value).toBe(42);
    expect(list.tail.next).toBe(list.tail);

    list.push(13);
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(42);
    expect(list.tail.value).toBe(13);
  });

  it("should pop nodes from list", () => {
    const list = new SinglyLinkedList();

    expect(list.pop()).toBe(null);

    const values = [42, 13, 88];
    values.forEach((val) => list.push(val));

    let length = values.length;
    while (list.head) {
      expect(list.length).toBe(length);
      expect(list.head.value).toBe(values[0]);
      expect(list.tail.value).toBe(values[length - 1]);
      list.pop();
      length -= 1;
    }

    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it("should shift nodes from list", () => {
    const list = new SinglyLinkedList();

    expect(list.shift()).toBe(null);

    const values = [42, 13, 88];
    values.forEach((val) => list.push(val));

    let shiftedItemIndex = 0;
    let length = values.length;
    while (list.head) {
      expect(list.length).toBe(length - shiftedItemIndex);
      expect(list.head.value).toBe(values[shiftedItemIndex]);
      expect(list.tail.value).toBe(values[values.length - 1]);
      list.shift();
      shiftedItemIndex += 1;
    }

    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it("should unshift node in list", () => {
    const list = new SinglyLinkedList();
    list.unshift(42);
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(42);
    expect(list.tail.value).toBe(42);

    list.unshift(1);
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(42);
  });

  it("should get node from list", () => {
    const list = new SinglyLinkedList();

    expect(list.get(42)).toBe(null);
    expect(list.get(-42)).toBe(null);

    list.push(42).push(88);

    const foundNode = list.get(1);
    expect(foundNode.value).toBe(88);
  });

  it("should set value in node of list", () => {
    const list = new SinglyLinkedList();
    list.push(42).push(88);

    list.set(13, 1);
    expect(list.get(1).value).toBe(13);

    list.set(13, 42);
    expect(list.get(42)).toBe(null);
  });

  it("should insert node in list", () => {
    const list = new SinglyLinkedList();

    expect(list.insert(13, -1)).toBe(false);
    expect(list.insert(13, 3)).toBe(false);

    expect(list.insert(42, 0)).toBe(true);

    expect(list.insert(13, 1)).toBe(true);
    expect(list.tail.value).toBe(13);
    expect(list.length).toBe(2);
  });

  it("should remove node from list", () => {
    const list = new SinglyLinkedList();

    expect(list.remove(1)).toBe(null);
    expect(list.remove(-1)).toBe(null);

    // list.push(1);
    // expect(list.remove(1)).toBe(true);
  });
});

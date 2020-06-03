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
});

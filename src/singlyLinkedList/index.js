export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    this.length += 1;
    return this;
  }

  traverse() {
    let current = this.head;

    while (current) {
      console.log(current);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  set(value, index) {
    let currentNode = this.get(index);

    if (!currentNode) {
      return false;
    }

    currentNode.value = value;
    return true;
  }

  insert(value, index) {
    if (index > this.length || index < 0) {
      return false;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    const newNode = new Node(value);
    const foundNode = this.get(index - 1);
    const tmp = foundNode.next;
    newNode.next = tmp;
    foundNode.next = newNode;

    this.length += 1;
    return true;
  }

  remove(index) {
    if (index > this.length || index < 0) {
      return null;
    }

    if (index === 0) {
      this.shift();
    }

    if (index === this.length) {
      this.pop();
    }

    const prevNode = this.get(index - 1);

    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length -= 1;

    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let index = 0; index < this.length; index++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newItem = new Node(value);

    if (this.size === 0) {
      this.first = newItem;
      this.last = newItem;
    } else {
      const temp = this.first;

      this.first = newItem;
      this.first.next = temp;
    }

    this.size += 1;
    return this;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const temp = this.first;

    this.first = temp.next;
    this.size -= 1;

    return temp.value;
  }
}

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    let deletedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length -= 1;
    return deletedNode;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }

    let deletedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = deletedNode.next;
      this.head.prev = null;
      deletedNode.next = null;
    }

    this.length -= 1;
    return deletedNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    const goFromEnd = index >= this.length / 2;
    let current;

    if (goFromEnd) {
      let start = this.length - 1;
      current = this.tail;
      while (start !== index) {
        current = current.prev;
        start -= 1;
      }
    } else {
      let start = 0;
      current = this.head;
      while (start !== index) {
        current = current.next;
        start += 1;
      }
    }

    return current;
  }

  set(value, index) {
    const node = this.get(index);

    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    newNode.next = afterNode;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    this.length += 1;

    return true;
  }

  remove(index) {
    if (index < -1 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const deletedItem = this.get(index);
    const beforeItem = deletedItem.prev;
    const afterItem = deletedItem.next;

    beforeItem.next = afterItem;
    afterItem.prev = beforeItem;

    deletedItem.prev = null;
    deletedItem.next = null;
    this.length -= 1;

    return deletedItem;
  }
}

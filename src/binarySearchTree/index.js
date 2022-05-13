export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;

      return this;
    }

    let current = this.root;

    while (current) {
      if (value > current.value) {
        if (current.right) {
          current = current.right;
        }

        current.right = newNode;
        return this;
      } else if (value < current.value) {
        if (current.left) {
          current = current.left;
        }

        current.left = newNode;
        return this;
      }

      if (value === current.value) {
        return null;
      }
    }

    return this;
  }

  find(value) {
    if (!this.root) {
      return null;
    }

    let current = this.root;

    while (current) {
      if (current.value === value) {
        return current;
      }

      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return null;
  }
}

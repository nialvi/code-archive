import { BinarySearchTree, Node } from ".";

describe("binarySearchTree", () => {
  it("should insert a value in an empty tree", () => {
    const tree = new BinarySearchTree();
    tree.insert(10);

    expect(tree.root.value).toBe(10);
    expect(tree.root.left).toBe(null);
    expect(tree.root.right).toBe(null);
  });

  it("should insert a value in a left node of the root", () => {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);

    const { left: leftNode, right: rightNode } = tree.root;

    expect(leftNode.value).toBe(5);
    expect(leftNode.left).toBe(null);
    expect(leftNode.right).toBe(null);
    expect(rightNode).toBe(null);
  });

  it("should insert a value in a right node of the root", () => {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(13);

    const { left: leftNode, right: rightNode } = tree.root;

    expect(leftNode.value).toBe(5);
    expect(leftNode.left).toBe(null);
    expect(leftNode.right).toBe(null);

    expect(rightNode.value).toBe(13);
    expect(rightNode.left).toBe(null);
    expect(rightNode.right).toBe(null);
  });

  it("should find node by value", () => {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(13);

    const node = tree.find(5);

    expect(node.value).toBe(5);
  });

  it("should not find node by not existed value", () => {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(13);

    const node = tree.find(15);

    expect(node).toBe(null);
  });
});

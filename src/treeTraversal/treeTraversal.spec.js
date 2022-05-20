import { breadthFirstSearch } from "./breadthFirstSearch";
import { depthFirstPreOrder } from "./depthFirstPreOrder";
import { depthFirstPostOrder } from "./depthFirstPostOrder";
import { depthFirstInOrder } from "./depthFirstInOrder";
import { BinarySearchTree } from "../binarySearchTree";

/**
 * Example:
 *            10
 *        6       15
 *     3    8        20
 *
 * @returns tree
 */
function createTree() {
  const tree = new BinarySearchTree()
    .insert(10)
    .insert(6)
    .insert(15)
    .insert(3)
    .insert(8)
    .insert(20);

  return tree;
}

describe("treeTraversal", () => {
  it("should return correct breadth first search", () => {
    const tree = createTree();

    expect(breadthFirstSearch(tree)).toStrictEqual([10, 6, 15, 3, 8, 20]);
  });

  it("should return correct depth first preorder search", () => {
    const tree = createTree();

    expect(depthFirstPreOrder(tree)).toStrictEqual([10, 6, 3, 8, 15, 20]);
  });

  it("should return correct depth first postorder search", () => {
    const tree = createTree();

    expect(depthFirstPostOrder(tree)).toStrictEqual([3, 8, 6, 20, 15, 10]);
  });

  it("should return correct depth first inorder search", () => {
    const tree = createTree();

    expect(depthFirstInOrder(tree)).toStrictEqual([3, 6, 8, 10, 15, 20]);
  });
});

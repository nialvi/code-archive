export function depthFirstInOrder(tree) {
  const result = [];

  function traverse(node) {
    if (node.left) {
      traverse(node.left);
    }

    result.push(node.value);

    if (node.right) {
      traverse(node.right);
    }
  }

  traverse(tree.root);

  return result;
}

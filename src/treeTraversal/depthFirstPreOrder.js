export function depthFirstPreOrder(tree) {
  const result = [];

  function traverse(node) {
    result.push(node.value);

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }
  }

  traverse(tree.root);

  return result;
}

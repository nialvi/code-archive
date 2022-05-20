export function depthFirstPostOrder(tree) {
  const result = [];

  function traverse(node) {
    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }

    result.push(node.value);
  }

  traverse(tree.root);

  return result;
}

export function breadthFirstSearch(tree) {
  const queue = [];
  const result = [];

  queue.push(tree.root);

  while (queue.length > 0) {
    const node = queue.shift();

    result.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
}

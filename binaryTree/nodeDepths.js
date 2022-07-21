// Node Depths
function nodeDepths(root) {
    let sumOfDepths = 0;
    const stack = [{ node: root, depth: 0}];
    console.log(stack.pop());
    while (stack.length > 0) {
      const { node, depth} = stack.pop();
      if (node === null) continue;
      sumOfDepths += depth;
      console.log(stack);
      stack.push({node: node?.left, depth: depth + 1});
      stack.push({node: node?.right, depth: depth+ 1});
    }
    return sumOfDepths;
}

const node = {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": null, "right": null, "value": 5},
      {"id": "6", "left": null, "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9}
    ],
    "root": "1"
  }

  // Solution 2
  function nodeDepths(root, depth = 0) {
    if (root === null) return null;
    return depth + nodeDepths(root.left, depth +1) + nodeDepths(root.right, depth + 1);
  }

  nodeDepths(node);
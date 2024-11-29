// @ts-ignore
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function traverse(node: TreeNode | null): void {
    if (node === null) return;

    result.push(node.val); // Process the current node
    traverse(node.left); // Traverse the left subtree
    traverse(node.right); // Traverse the right subtree
  }

  traverse(root);
  return result;
}

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(preorderTraversal(tree)); // Output: [1, 2, 3]

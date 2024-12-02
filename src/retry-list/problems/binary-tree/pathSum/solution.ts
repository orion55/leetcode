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

// @ts-ignore
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];

  function dfs(node: TreeNode | null, currentSum: number, path: number[]): void {
    if (!node) return;

    currentSum += node.val;
    path.push(node.val); // Add the current node's value to the path

    if (!node.left && !node.right && currentSum === targetSum) {
      result.push([...path]); // Create a new subarray for the current path and add it to the result
    }

    dfs(node.left, currentSum, path);
    dfs(node.right, currentSum, path);

    path.pop(); // Remove the current node's value from the path
  }

  dfs(root, 0, []);
  return result;
}

// @ts-ignore
const root = new TreeNode(
  5,
  new TreeNode(
    4,
    new TreeNode(11, new TreeNode(7), new TreeNode(2)),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1))),
  ),
);
// @ts-ignore
const targetSum = 22;

console.log(pathSum(root, targetSum));

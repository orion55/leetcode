// Definition for a binary tree node.
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

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  // Если у узла нет левого поддерева, минимальная глубина в правом поддереве
  if (!root.left) {
    return minDepth(root.right) + 1;
  }

  // Если у узла нет правого поддерева, минимальная глубина в левом поддереве
  if (!root.right) {
    return minDepth(root.left) + 1;
  }

  // В противном случае минимальная глубина — это минимальная глубина
  // между левым и правым поддеревьями, плюс 1 (для текущего узла)
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}
// @ts-ignore
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// @ts-ignore
// const root = new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))));

console.log(minDepth(root));

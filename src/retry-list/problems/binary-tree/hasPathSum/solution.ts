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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false; // Базовый случай: если root равен null, пути нет
  }

  // Проверяем, является ли текущий узел листом и равна ли сумма пути targetSum
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  // Вычитаем значение текущего узла из targetSum и рекурсивно проверяем
  const newTarget = targetSum - root.val;

  return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);
}

// Creating a binary tree
// @ts-ignore
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11, new TreeNode(7), new TreeNode(2));
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4, null, new TreeNode(1));

// @ts-ignore
const targetSum = 22;
console.log(hasPathSum(root, targetSum)); // Output: true

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
function pathSum(root: TreeNode | null, targetSum: number): number {
  let result = 0;

  // Функция для поиска путей, начиная от текущего узла
  function dfs(node: TreeNode | null, currentSum: number): void {
    if (!node) return;

    currentSum += node.val;

    if (currentSum === targetSum) {
      result++; // Если сумма равна targetSum, увеличиваем результат
    }

    // Рекурсивный обход левого и правого поддеревьев
    dfs(node.left, currentSum);
    dfs(node.right, currentSum);
  }

  // Функция для поиска путей, начиная от каждого узла дерева
  function findPaths(node: TreeNode | null): void {
    if (!node) return;

    // Запускаем DFS с текущего узла
    dfs(node, 0);

    // Рекурсивный вызов для левого и правого поддеревьев
    findPaths(node.left);
    findPaths(node.right);
  }

  // Запускаем поиск с корня дерева
  findPaths(root);

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

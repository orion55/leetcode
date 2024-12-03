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
  const prefixSumMap: Map<number, number> = new Map();
  prefixSumMap.set(0, 1); // Чтобы обработать случай, когда путь с самого начала приводит к нужной сумме

  function dfs(node: TreeNode | null, currentSum: number): void {
    if (!node) return;

    currentSum += node.val;

    // Если в карте есть путь с суммой currentSum - targetSum, значит нашли путь, который дает нужную сумму
    result += prefixSumMap.get(currentSum - targetSum) || 0;

    // Добавляем текущую префиксную сумму в карту
    prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);

    // Рекурсивно проверяем левого и правого потомков
    dfs(node.left, currentSum);
    dfs(node.right, currentSum);

    // После возврата из рекурсии, убираем текущую префиксную сумму из карты
    prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) - 1);
  }

  // Запускаем DFS с корня дерева
  dfs(root, 0);

  return result;
}

// @ts-ignore
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(-3);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(2);
root.right.right = new TreeNode(11);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.left.right.right = new TreeNode(1);
// @ts-ignore
const targetSum = 8;
console.log(pathSum(root, targetSum)); // Вывод: 3

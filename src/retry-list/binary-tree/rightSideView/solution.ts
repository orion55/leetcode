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

function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null, level: number): void {
    if (!node) return;

    // Если это первый узел на этом уровне, добавляем его в результат
    if (result.length === level) {
      result.push(node.val);
    }

    // Сначала рекурсивно обрабатываем правое поддерево
    dfs(node.right, level + 1);
    // Затем левое поддерево
    dfs(node.left, level + 1);
  }

  dfs(root, 0);
  return result;
}

// @ts-ignore
const root = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)));

console.log(rightSideView(root)); // Вывод: [1, 3, 4]

// @ts-ignore
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  function traverse(node: TreeNode | null, level: number): void {
    if (!node) return;

    // Если уровень ещё не существует в результатах, создаём новый подмассив
    if (result.length === level) {
      result.push([]);
    }

    // Добавляем значение текущего узла на соответствующий уровень
    result[level].push(node.val);

    // Рекурсивно обходим левого и правого потомков
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);
  return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(levelOrder(root));

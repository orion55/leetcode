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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // Если оба дерева пустые, они одинаковые
  if (p === null && q === null) return true;

  // Если одно дерево пустое, а другое нет, они разные
  if (p === null || q === null) return false;

  // Если значения текущих узлов разные, деревья разные
  if (p.val !== q.val) return false;

  // Рекурсивно проверяем левое и правое поддеревья
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Создаём два бинарных дерева
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(tree1, tree2)); // Вывод: true

const tree3 = new TreeNode(1, new TreeNode(2));
const tree4 = new TreeNode(1, null, new TreeNode(2));

console.log(isSameTree(tree3, tree4)); // Вывод: false

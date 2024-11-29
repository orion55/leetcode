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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true; // Пустое дерево считается симметричным.

  function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true; // Оба узла пусты, симметрия соблюдена.
    if (!left || !right) return false; // Один узел пуст, а другой нет — симметрии нет.

    return (
      left.val === right.val && // Значения корневых узлов должны совпадать.
      isMirror(left.left, right.right) && // Левое поддерево одного с правым другого.
      isMirror(left.right, right.left) // Правое поддерево одного с левым другого.
    );
  }

  return isMirror(root.left, root.right);
}

// @ts-ignore
const tree = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));

console.log(isSymmetric(tree)); // Вывод: true

const asymTree = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)));

console.log(isSymmetric(asymTree)); // Вывод: false

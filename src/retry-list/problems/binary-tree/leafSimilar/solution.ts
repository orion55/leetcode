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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const getLeafSequence = (node: TreeNode | null, leafSequence: number[]): void => {
    if (!node) return;

    if (!node.left && !node.right) {
      leafSequence.push(node.val);
    }

    getLeafSequence(node.left, leafSequence);
    getLeafSequence(node.right, leafSequence);
  };

  const leafSequence1: number[] = [];
  const leafSequence2: number[] = [];

  getLeafSequence(root1, leafSequence1);
  getLeafSequence(root2, leafSequence2);

  if (leafSequence1.length !== leafSequence2.length) {
    return false;
  }

  for (let i = 0; i < leafSequence1.length; i++) {
    if (leafSequence1[i] !== leafSequence2[i]) {
      return false;
    }
  }

  return true;
}

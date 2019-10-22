function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const lowestCommonAncestor = (root, p, q) => {
  let LCA = null;
  let LCADepth = -1;
  const LCAFinder = (node, p, q, depth) => {
    let left, right = null;
    if (p < q) {
      left = p;
      right = q;
    } else {
      left = q;
      right = p;
    }
    if (!node.right && !node.left) {
      return;
    } else if (node.left && !node.right) {
      if (node.left.val === left && node.val === right) {
        if (depth > LCADepth) {
          LCA = node.val;
          LCADepth = depth;
        }
      }
      //continue left
      LCAFinder(node.left, p, q, depth + 1);
    } else if (node.right && !node.left) {
      if (node.right.val === right && node.val === left) {
        if (depth > LCADepth) {
          LCA = node.val;
          LCADepth = depth;
        }
      }
      //continue right
      LCAFinder(node.right, p, q, depth + 1);
    } else if (node.right && node.left) {
        if (depth > LCADepth) {
          LCA = node.val;
          LCADepth = depth;
        }
      }
      //continue left and right
      LCAFinder(node.left, p, q, depth + 1);
      LCAFinder(node.right, p, q, depth + 1);
    }
  }
  LCAFinder(root, p, q, 0);
  console.log(LCA);
  return LCA;
};

let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

lowestCommonAncestor(root, 3, 5)
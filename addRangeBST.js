
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var rangeSumBST = function (root, L, R) {
  if(root === undefined || root === null) {
    return 0;
  } else if (root.val <= R && root.val >= L) {
    return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
  } else {
    if(root.val < L) {
      return rangeSumBST(root.right, L, R);
    } else if (root.val > R) {
      return rangeSumBST(root.left, L, R);
    }
  }
};
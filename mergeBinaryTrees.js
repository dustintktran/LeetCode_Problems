
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  if(!t1 && !t2) {
    return null;
  }
  let node = new TreeNode;
  if(t1 && !t2) {
    node.val = t1.val;
    node.left = mergeTrees(t1.left, null);
    node.right = mergeTrees(t1.right, null);
  }
  if(t2 && !t1) {
    node.val = t2.val;
    node.left = mergeTrees(null,t2.left);
    node.right = mergeTrees(null, t2.right);
  }
  if(t1 && t2) {
    node.val = t1.val + t2.val;
    node.left = mergeTrees(t1.left,t2.left);
    node.right = mergeTrees(t1.right, t2.right);
  }
  return node;
};
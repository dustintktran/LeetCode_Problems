function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const minDiffBST = (root) => {
  let min = Infinity;
  const findDiffRecursive = (node) => {
    if (node.left) {
      let leftDiff = node.val - node.left.val;
      if(leftDiff < min) {
        min = leftDiff;
      }
      deepCheckLeft(node, node);
      findDiffRecursive(node.left);
    }
    if(node.right) {
      let rightDiff = node.right.val - node.val;
      if(rightDiff < min) {
        min = rightDiff;
      }
      deepCheckRight(node, node);
      findDiffRecursive(node.right);
    }
  }
  
  const deepCheckLeft = (node, current) => {
    let currentNode = current.left;
    if(currentNode.right) {
      currentNode = currentNode.right;
      let currentDiff = node.val - currentNode.val;
      if(currentDiff < min) {
        min = currentDiff;
      }
      //check all the rights
      let rights = currentNode;
      while(rights.right) {
        let rightsDiff = node.val - rights.right.val;
        if(rightsDiff < min) {
          min = rightsDiff;
        }
        rights = rights.right;
      }

      if(currentNode.left) {
        deepCheckLeft(node, currentNode);
      }
    }
  }

  const deepCheckRight = (node, current) => {
    let currentNode = current.right;
    if(currentNode.left) {
      currentNode = currentNode.left;
      let currentDiff = currentNode.val - node.val;
      if(currentDiff < min) {
        min = currentDiff;
      }
      //check all the lefts
      let lefts = currentNode;
      while(lefts.left) {
        let leftsDiff = lefts.left.val - node.val;
        if(leftsDiff < min) {
          min = leftsDiff;
        }
        lefts = lefts.left;
      }

      if(currentNode.right) {
        deepCheckRight(node, currentNode);
      }
    }
  }
  

  findDiffRecursive(root);
  return min;

}
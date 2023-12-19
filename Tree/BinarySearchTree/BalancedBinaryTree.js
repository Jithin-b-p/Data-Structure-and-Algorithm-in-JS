const isBalancedBinaryTree = function(root) {

  // there exist no node to check for balanced.
  if(root === null) return true;

  // finding the left and right subtree height.
  let leftHeight = findHeight(root.left);
  let rightHeight = findHeight(root.right);

  // if the height difference is not atmost 1. Then the tree is not balanced.
  if(Math.abs(leftHeight - rightHeight) > 1) return false;


  // check for left and right nodes.
  let left = isBalancedBinaryTree(root.left);
  let right = isBalancedBinaryTree(root.right);

  // if any node's left or right subtree is not balanced then return false.
  if(!left || !right) return false;

  // balanced tree.
  return true;
}

const findHeight = function(root) {
  // if no node height is 0.
  if(root === null) return 0;

  // finding the max of left and right subtree.
  return Math.max(findHeight(root.left), findHeight(root.right)) + 1;

}

/*
A TREE IS BALANCED IF FOR EVERY NODE IN THE TREE THE HEIGHT DIFFERENCE BETWEEN THE 
LEFT AND RIGHT SUBTREE OF THE NODE IS ATMOST 1 (<= 1). ELSE IT IS AN UNBALANCED TREE.
*/
// *************************************
// METHOD -1
// *************************************

// return a boolean
// starting function
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

// helper function
const findHeight = function(root) {
  // if no node height is 0.
  if(root === null) return 0;

  // finding the max of left and right subtree.
  return Math.max(findHeight(root.left), findHeight(root.right)) + 1;

}

// The above method is a naive solution for finding the tree is a balanced or not.
// For each node we are finding the height of left and right subtrees and check 
// whether it is balanced on not.
// This cause the time complexity to be O(n^2)


// **************************
// METHOD -2
// **************************

// return a boolean
// starting function.
const isBalanced = function(root) {
  return isBalancedHelper(root) != -1;
}

// helper function.(modification on the height finding function.)
const isBalancedHelper = function(root) {
  if(root === null) return 0;

  let leftHeight = isBalancedHelper(root.left);
  // we don't need to move further as we found the tree is unbalanced.
  if(leftHeight === -1) return -1;

  let rightHeight = isBalancedHelper(root.right);
  // dont need to check further.
  if(rightHeight === -1) return -1;

  // checking for tree is unbalanced or not.
  if(Math.abs(leftHeight - rightHeight) > 1) return -1;

  // returning the max height/
  return Math.max(leftHeight, rightHeight) + 1;
}


// The above solution is a more optimised one instead of finding the left and right
// subtree height we do check for tree balance or not along the height finding traversal.
// Time complexity - O(n) ||| space complexity O(n) (worst case skew tree)
// a function to find the left boundaries and add it to the boundary list.
const addLeftBoundary = function(root, ans) {

  let currNode = root.left;
  // the loop will run till till the currNode is null.
  while(currNode) {
    // if the node is not a leaf node the we can take it as boundary.
    if(!isLeaf(currNode)) ans.push(currNode.data);
  }
}

// a function to check given node is a leaf node or not.
const isLeaf = function(root) {
  // if there is no left or right subtree for a node then its a leaf node.
  if(!root.left && !root.right) return true;
  return false;
}
/*
// given the root node. 
@return array of boundary node values.
*/
// entry point.
const boundary = function(root) {

  const ans = [];
  // return empty array if root is null.(no boundary present).
  if(root === null) return ans;
  // if the root node is not a leaf node then we can add it to the ans array.
  // as it is a part of boundary.
  if(!isLeaf(root)) ans.push(root.data);



}
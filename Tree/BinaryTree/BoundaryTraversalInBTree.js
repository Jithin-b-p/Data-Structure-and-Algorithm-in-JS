// getting the left from left to right (anticlockwise)
const getLeafBoundary = function(root, ans) {  
  // if node is null the return.(base case)
  if(root === null) return;
  // if the node is a leaf node then add it to the boundary list.
  if(isLeaf(root)) {
    ans.push(root.data);
    return;
  }

  // we are traversing to the left end to start from left most leaf and move towards right.
  getLeafBoundary(root.left, ans);
  getLeafBoundary(root.right, ans);

}

// a function to find the right boundaries we will add it to the boundary list(ans).
const addRightBoundary = function(root, ans) {

  // storing the right boundary in clockwise order.
  const rightBoundary = [];

  let currNode = root.right;
  // loop will run when the currNode is not null
  while(currNode) {
    // if the currNode is not a leaf node the we can add it to the rightboundary list.
    if(!isLeaf(currNode)) rightBoundary.push(currNode.data);

    // if our currnode has a right node them we can move to right node.
    if(currNode.right) currNode = currNode.right;
    // if no right node then we can move to the left node. which will be the current right boundary.
    else currNode = currNode.left;

  }

  // adding to the ans list in correct order(anticlockwise)
  for(let i = rightBoundary.length - 1; i >= 0; i--) {
    ans.push(rightBoundary[i]);
  }

}

// a function to find the left boundaries and add it to the boundary list(ans).
const addLeftBoundary = function(root, ans) {

  let currNode = root.left;
  // the loop will run till till the currNode is null.
  while(currNode) {
    // if the node is not a leaf node the we can take it as boundary.
    if(!isLeaf(currNode)) ans.push(currNode.data);

    // if we have a left node the we move toward the left node as it make up the left boundary.
    if(currNode.left) currNode = currNode.left;
    // if we dont have a left node then the boundary becomes the right node.
    else currNode = currNode.right;
  }
}

// a function to check given node is a leaf node or not.
const isLeaf = function(root) {
  // if there is no left or right subtree for a node then its a leaf node.
  if(!root.left && !root.right) return true;
  return false;
}
/*
*******************************************
WE NEED TO FIND BOUNDARIES ANTICLOCKWISE.
*******************************************
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

  // we are following the anticlockwise order to get the boundary.
  // (moving from left to leaf then right)
  addLeftBoundary(root, ans);
  getLeafBoundary(root, ans);
  addRightBoundary(root, ans);
}
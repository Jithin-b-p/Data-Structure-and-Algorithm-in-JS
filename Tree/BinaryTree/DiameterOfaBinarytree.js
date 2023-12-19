// *****************
// method-1
// ****************
/*
A naive approach for this can be finding the summation of maximum height of left and right subtree of a node and comparing it with current diameter.
T.C- O(n^2)
*/

/*
*********************
method-2
*********************

As we are finding the maximum height of left and right subtree for a node we can sum them up to find a longer diameter.
*/
const diameterBT = function(root) {

  // initializing a variable to store the diameter.
  let diameter = 0;
  const diameterFinder = function(root) {

    // base case.(if a node has no child then there height will be 0)
    if(root === null) return 0;

    // finding the height of left and right subtree for every node.
    const leftHeight = diameterFinder(root.left);
    const rightHeight = diameterFinder(root.right);

    // as we find the height of left and right subtree(which is always the max) then we can sum it to get a diameter in which the current node is included. Compare it with already found diameter and store the max.
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return the max height for calling node.
    return 1 + Math.max(leftHeight, rightHeight);

  }

  diameterFinder(root);
  return diameter;
}


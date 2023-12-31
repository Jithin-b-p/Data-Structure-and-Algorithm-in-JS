const inorder = [];
let currNode = root;
while (currNode) {
  if (!currNode.left) {
    inorder.push(currNode.val);
    currNode = currNode.right;
  } else {
    let prevNode = currNode.left;
    while (prevNode.right && prevNode.right !== currNode) {
      prevNode = prevNode.right;
    }

    if (!prevNode.right) {
      prevNode.right = currNode;
      currNode = currNode.left;
    } else {
      prevNode.right = null;
      inorder.push(currNode.val);
      currNode = currNode.right;
    }
  }
}

return inorder;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let str = "";
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const currNode = queue.shift();
    if (currNode === null) {
      str += "n ";
      continue;
    }
    str += currNode.val + " ";

    queue.push(currNode.left);
    queue.push(currNode.right);
  }

  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "n ") return null;
  const strArray = data.trim().split(" ");
  const root = new TreeNode(+strArray[0]);
  const queue = [];
  queue.push(root);

  for (let i = 1; i < strArray.length; i++) {
    const parent = queue.shift();
    if (strArray[i] !== "n") {
      const left = new TreeNode(+strArray[i]);
      parent.left = left;
      queue.push(left);
    }
    i++;
    if (strArray[i] !== "n") {
      const right = new TreeNode(+strArray[i]);
      parent.right = right;
      queue.push(right);
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

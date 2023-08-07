/**
 * 
@param {TreeNode} root
@return {number[]}
 * 
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
};

var treeTraversal = function(root) {
  if (root === null) return [];
  return [...treeTraversal(root.left), root.val, ...treeTraversal(root.right)]; 

}

console.log(treeTraversal([1,null,2,3]));
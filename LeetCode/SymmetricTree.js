var isSymmetric = function(root) {
  if(root === null) return true;
  return isMirror(root.left, root.right);
};

var isMirror = function(left, right) {
  if(left === null && right === null) return true;
  if(left === null || right === null) return false;
  if (left.val !== right.val) return false;
  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}
console.log(isSymmetric([1,2,2,3,4,4,3]));
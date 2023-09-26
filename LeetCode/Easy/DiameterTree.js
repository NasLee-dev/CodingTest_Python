var diameterOfBinaryTree = function(root) {
  
  let cnt = 0;
  dfs(root);
  return cnt;

  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);

    cnt = Math.max(cnt, left+right);
    return 1 + Math.max(left, right);
  }
};

console.log(diameterOfBinaryTree([1,2,3,4,5]));
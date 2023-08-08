var maxDepth = function(root) {
  let visited = [];
  let maxDepth = 0;
  if(root === null) return maxDepth;
  let q = [];
  q.push(root);

  while(q.length !== 0) {
    let size = q.length;
    for(let i = 0; i < size; i++) {
      let node = q.shift();
      if(node.left !== null) q.push(node.left);
      if(node.right !== null) q.push(node.right);
    }
    maxDepth++;
  }
  return maxDepth;
};


// recursive version

var maxDepth2 = function(root) {
  let depth = 0;
  depthTraverse(root);

  function depthTraverse(root, nodeDepth = 1) {
    if(!root) {
      return;
      }
    if(nodeDepth > depth) {
      depth = nodeDepth;
      }
      depthTraverse(root.left, nodeDepth + 1);
      depthTraverse(root.right, nodeDepth + 1);
    }
    return depth;
  };


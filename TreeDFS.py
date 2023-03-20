def dfs(cur_node):
  if cur_node is None:
    return
  dfs(cur_node.left)
  dfs(cur_node.right)
  
dfs(root)
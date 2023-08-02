from collections import deque

def MaxDepth(root):
  if root is None:
    return 0;
  left_depth = MaxDepth(root.left)
  right_depth = MaxDepth(root.right)
  return max(left_depth, right_depth) + 1
  
class TreeNode:
  def __init__(self, l = None, r = None, v = 0):
    self.left = l
    self.right = r
    self.value = v
    
root = TreeNode(v = 3)
root.left = TreeNode(v=9)
root.right = TreeNode(v=20)
root.right.left = TreeNode(v=15)
root.right.right = TreeNode(v=7)
  
MaxDepth(root)
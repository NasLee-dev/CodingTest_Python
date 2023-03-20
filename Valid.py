def validCheck(S):
  stack = [];
  for p in S:
    if p == "(":
      stack.append(")");
    elif p == "{":
      stack.append("}");
    elif p == "[":
      stack.append("]");
    elif not stack or stack.pop() != p:
      return False;
  return not stack


print(validCheck(S= "(((({{{{}}}}))))[]"));
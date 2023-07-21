# Top-Down 방식.
cost=[10, 15, 20, 17, 1]
memo = {}

def dp(n):
  if n == 0 and n == 1:
    return 0
  if n not in memo:
    memo[n] = min(dp(n-1)+cost[n-1], dp(n-2)+cost[n-2])
  return memo[n]

# Bottom-Up 방식.
def dp_2(n):
  memo = [-1] * n
  memo[0] = 0
  memo[1] = 0
  for i in range(2, n+1):
    memo[i] = min(memo[n-1]+cost[n-1], memo[n-2]+cost[n-2])
  return memo[n]
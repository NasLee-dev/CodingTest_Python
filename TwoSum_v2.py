def two_sum_v2(nums, target):
  memo = {};
  result = [];
  for v in nums:
    memo[v] = 1;
  
  for v in nums:
    needed_num = target - v;
    if needed_num in memo and needed_num != v:
      return True;
  return False;

print(two_sum_v2(nums=[4, 1, 5, 9, 7, 8, 10], target=14));
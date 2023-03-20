def logN(nums, target):
  n = len(nums);
  nums.sort();
  l = 0;
  r = n - 1;
  while l < r:
    if (nums[l] + nums[r] > target):
      r -= 1;
    elif (nums[l] + nums[r] < target):
      l += 1;
    if(nums[l] + nums[r] == target):
      return True;
  return False;
  
print(logN(nums=[4, 1, 2, 3, 5, 6, 7], target=10));
def longestConsecutive(nums):
  longest = 0
  num_dict = {}
  for num in nums:
    num_dict[num] = True
    
  for num in num_dict:
    if num - 1 not in num_dict:
      cnt = 1
      target = num + 1
      while target in num_dict:
        target += 1
        cnt += 1
      longest = max(longest, cnt)
  return longest

class Solution:
  def longestConsecutive(self, nums: list[int]) -> int:
    result = 0
    if not len(nums):
      return result;
    
    num_dict = {x: x + 1 for x in nums}
    for n in nums:
      target = n
      cnt = 0
      if n - 1 not in num_dict:
        while target in num_dict:
          target = num_dict[target]
          cnt += 1
          if result < cnt:
            result = cnt
    return result
  
print(longestConsecutive(nums=[3, 4, 5, 6, 100, 101, 200]))
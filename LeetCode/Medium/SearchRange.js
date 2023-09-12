var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);
  let result = [-1, -1];
  while (left <= right) {
    if (nums[mid] === target) {
      result[0] = mid;
      result[1] = mid;
      while (nums[result[0] - 1] === target) {
        result[0]--;
      }
      while (nums[result[1] + 1] === target) {
        result[1]++;
      }
      return result;
    }
    if (nums[mid] < target) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
    if (nums[mid] > target) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    }
  }
  return result;
};

console.log(searchRange([5,7,7,8,8,10], 6));
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }
    left++;
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));


var search2 = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  const targetI = target >= nums[0];
  while(low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const midI = nums[mid] >= nums[0];
    if (nums[mid] === undefined) return -1;
    if (midI && !targetI) low = mid + 1;
    else if (!midI && targetI) high = mid - 1;
    else if (nums[mid] < target) low = mid + 1;
    else if (nums[mid] > target) high = mid - 1;
    else return mid;
  }
  return -1;
}
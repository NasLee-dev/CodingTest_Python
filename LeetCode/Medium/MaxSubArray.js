var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if(sum > max) {
      max = sum;
    }
    if(sum < 0) {
      sum = 0;
    }
  }
  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6

var maxSubArray2 = function(nums) {
  // Initialize the max sum...
  let maxSum = nums[0];
  // Traverse all the element through the loop...
  for (let i = 1; i < nums.length; i++) {
      // nums[i] represents the largest sum of all subarrays ending with index i...
      // then its value should be the larger one between nums[i]...
      // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
      // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
      nums[i] = Math.max(0, nums[i - 1]) + nums[i];
      // if nums[i] > maxSum then maxSum = nums[i]...
      if (nums[i] > maxSum)
          maxSum = nums[i];
  }
  return maxSum;      // return the contiguous subarray which has the largest sum...
};

console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4])); // 6
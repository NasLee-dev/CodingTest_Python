var majorityEle = function(nums) {
  let n = nums.length;
  let times = Math.floor(n / 2);
  let result = {};

  for (let i = 0; i < n; i++) {
    if(!result[nums[i]]) {
      result[nums[i]] = 1;
    } else {
      result[nums[i]]++;
    }
    if(result[nums[i]] > times) return nums[i];
  }
  return result;
};

console.log(majorityEle([3,2,3]));

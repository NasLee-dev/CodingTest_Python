var jump = function(nums) {
  let n = nums.length;
  let jumps = 0;
  let farthest = 0;
  let currEnd = 0;
  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currEnd) {
      jumps++;
      currEnd = farthest;
    }
  }
  return jumps;
};

console.log(jump([2,3,1,1,4]))
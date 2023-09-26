var moveZero = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    } 
  }
  return nums;
};

console.log(moveZero([0,1,0,3,12]));
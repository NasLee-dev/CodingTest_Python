var canJump = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false;
    max = Math.max(max, i + nums[i]);
  }
  return true;
}

console.log(canJump([3,2,1,0,4])); // false

//  solution2

var canJump2 = function(nums) {
  //  Base condition...
  if (nums.length <= 1) return true;

  //  Maximum값 초기화
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    //  if there is no way to jump to next?
    if (max <= i && nums[i] === 0) return false;

    //  update max
    if (i + nums[i] > max) {
      max = i + nums[i];
    }

    //  max is enough to the last index
    if (max >= nums.length - 1) return true;
  }
  return false;
};

console.log(canJump2([3,2,1,1,4])); // true 
var singleNumber = function(nums) {
    const dupleCheck = {};
    for (let i = 0; i < nums.length; i++) {
      if (dupleCheck[nums[i]]) {
        delete dupleCheck[nums[i]];
      } else {
        dupleCheck[nums[i]] = true;
      }
    }
    return Object.keys(dupleCheck)[0];
};

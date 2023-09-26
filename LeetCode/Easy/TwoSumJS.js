var twoSum = function(nums, target) {
  const myObj = {};
  for(let i = 0; i < nums.length; i++) {
      if(myObj[nums[i]] != undefined) {
          return [myObj[nums[i]], i]
      } else {
          myObj[target - nums[i]] = i;
      }
  }
};


console.log(twoSum(nums = [3, 2, 4], target = 6))
var searchInsert = function(nums, target) {
  let len = nums.length;
  while (len--) {
    if (nums[len] === target) return len;
    if (nums[len] < target) return len + 1;
    if (len === 0) return 0;
  }
};

console.log(searchInsert([1,3,5,6], 0));


var searchInsertv2 = function(nums, target) {
    
  let low = 0,
      high = nums.length - 1;
  
  while(low <= high){
      let mid = Math.floor(low +(high-low)/2);
      
      if(nums[mid] == target){
          return mid;
      }
      else if (nums[mid] < target){
        low = mid + 1;
      }
      else{
        high = mid - 1;
      }
  }
  return low;
  
  
};

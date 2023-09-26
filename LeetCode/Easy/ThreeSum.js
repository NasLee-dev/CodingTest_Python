// var threeSum = function(nums) {
//   let result = [];
//   nums.sort((a, b) => a - b);
//   for (const a of nums) {
//     let mid = Math.floor((nums.length - 1) / 2);
//     let left = 0;
//     let right = nums.length - 1;
//     while (left < mid && right > mid) {
//       let sum = nums[left] + nums[right] + nums[a];
//       if (sum === 0 && left !== right && left !== a && right !== a) {
//         result.push([nums[left], nums[right], nums[a]]);
//         left++;
//         right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }
//   return result;
// };


// // [-4, -1, -1, 0, 1, 2]

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));


var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for(let i = 0; i < nums.length; i++) {
      let low = i+1, high = nums.length-1, sum = 0;
      
      while(low < high) {
          sum = nums[i] + nums[low] + nums[high];
          
          if(sum === 0) {
              result.push([nums[i], nums[low], nums[high]]);
              while(nums[low+1] === nums[low]) low++;
              while(nums[high-1] === nums[high]) high--;
              low++;
              high--;
          } else if(sum < 0) low++;
          else high--;
      }
      while(nums[i+1] === nums[i]) i++;
  }
  return result;    
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
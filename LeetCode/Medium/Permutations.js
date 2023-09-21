// var permute = function(nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.length === 1) {
//       result.push(nums);
//       return result;
//     }
//     let temp = nums.slice();
//     temp.splice(i, 1);
//     let tempResult = permute(temp);
//     for (let j = 0; j < tempResult.length; j++) {
//       result.push([nums[i], ...tempResult[j]]);
//     }
//   }
//   return result;
// };

// console.log(permute([1,2,3]));


// // solv 2

// var permute2 = function(nums) {
//   let result = [];
//   let dfs = (nums, path) => {
//     if (nums.length === 0) {
//       result.push(path);
//     }
//     for (let i = 0; i < nums.length; i++) {
//       dfs([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]])
//     }
//   }
//   dfs(nums, []);
//   return result;
// };

// console.log(permute2([1,2,3]));


// solv 3
var permute3 = function(nums) {
  let result = [];
  let used = Array(nums.length).fill(false);
  let dfs = (path) => {
    if (path.length === nums.length) {
      result.push(path);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      dfs([...path, nums[i]]);
      used[i] = false;
    }
  }
  dfs([]);
  return result;
};

console.log(permute3([1,2,3]))
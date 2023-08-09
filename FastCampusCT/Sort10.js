var sortInside = function(nums) {
  let n = nums[0];
  let cnt = Array(10).fill(0);  //  0 ~ 9까지의 숫자의 빈도수를 0으로 초기화.
  for (let x of n) {
    cnt[Number(x)]++;
  }

  let result = [];
  for (let i = 9; i >= 0; i--) {
    for (let j = 0; j < cnt[i]; j++) {
      result.push(i);
    }
  }
  return result;
}


console.log(sortInside(nums = ['2143']));
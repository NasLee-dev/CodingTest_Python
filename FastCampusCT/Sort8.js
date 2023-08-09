/**
 * 
 * @param {*} nums 
 * @returns 
var pressedNumber = function(nums) {
  let min = nums[0];
  let biggerNum = 0;
  let result = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    } else {
      biggerNum++;
      result.push(biggerNum);
    }
  }
  return result;
}

console.log(pressedNumber([2, 1, 3, 1, 2]));
 */


var uniqueNumber = function(nums) {
  let answer = [];
  let uniqueArray = [...new Set(nums)];
  uniqueArray.sort((a, b) => a - b);

  let myMap = new Map();
  for (let i = 0; i < uniqueArray.length; i++) {
    myMap.set(uniqueArray[i], i);
  }

  for (x of nums) {
    answer.push(myMap.get(x));
  }
  return answer;
}

console.log(uniqueNumber([2, 1, 3, 1, 2]));

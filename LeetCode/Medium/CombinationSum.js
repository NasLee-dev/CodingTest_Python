var combinationSum = function(candidates, target) {
  let result = [];
  if (candidates.length === 0) return result;
  for (let i = 0; i < candidates.length; i++) {
    if (candidates.length === 1 && target % candidates[i] !== 0) return result;
    if (candidates[i] > target) continue;
    if (candidates[i] === target) {
      result.push([candidates[i]]);
      continue;
    };
    let temp = combinationSum(candidates.slice(i), target - candidates[i]);
    if (temp.length === 0) continue;
    for (let j = 0; j < temp.length; j++) {
      result.push([candidates[i], ...temp[j]]);
    }
  }
  return result;
};

console.log(combinationSum([2,3,6,7], 7));


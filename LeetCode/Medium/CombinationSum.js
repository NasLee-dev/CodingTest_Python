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

var comSum = function(candidates, target) {
  let res = [];
  let temp = [];

  let iterate = (index, sum) => {
    if (sum > target) return;
    if (sum === target) {
      res.push([...temp]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) continue;
      temp.push(candidates[i]);
      iterate(i, sum + candidates[i]);
      temp.pop();
    }
  }
  iterate(0, 0);
  return res;
};


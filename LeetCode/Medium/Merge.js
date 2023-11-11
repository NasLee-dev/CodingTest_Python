var merge = function(intervals) {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let current = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (current[1] >= intervals[i][0]) {
      current[1] = Math.max(current[1], intervals[i][1]);
    }
    else {
      result.push(current);
      current = intervals[i];
    }
  }
  result.push(current);
  return result;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))

// solution 2
var merge2 = function(intervals) {
  if (intervals.length <= 1) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let [start, end] of intervals) {
    const endPrev = result.at(-1)[1];
    if (start <= endPrev) {
      result.at(-1)[1] = Math.max(end, endPrev);
    } else {
      result.push([start, end]);
    }
  }
  return result;
};


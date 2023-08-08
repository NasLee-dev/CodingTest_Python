var generate = function(numRows) {
  let init = [[1]];
  for (let i = 1; i < numRows; i++) {
    const newArr = [1];
    for (let j = 1; j < i; j++) {
      newArr.push(init[i - 1][j] + init[i - 1][j - 1]);
    }
    newArr.push(1);
    init.push(newArr);
  }
  return init;
}

console.log(generate(2));

// numRows = 2일 때
// init[0][1] + init[0][0] => 1 + 0 = 1
// newArr = [1, 1]
// init = [[1], [1, 1]] => 1번째 반복문 종료

var generate2 = function(numRows) {
  let ans = new Array(numRows)
  for (let i = 0; i < numRows; i++) {
      let row = new Uint32Array(i+1).fill(1),
          mid = i >> 1
      for (let j = 1; j <= mid; j++) {
          let val = ans[i-1][j-1] + ans[i-1][j]
          row[j] = val, row[row.length-j-1] = val
      }
      ans[i] = row
  }
  return ans
};
var rotate = function (matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let temp = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      temp.push(matrix[j][i]);
    }
    result.push(temp);
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = result[i];
  }
  return matrix;
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
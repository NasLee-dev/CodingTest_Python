var spiralOrder = function(matrix) {
  let result = [];
  let rowStart = 0;
  let rowEnd = matrix.length - 1; // matrix.length = 3, rowEnd = 2
  let colStart = 0;
  let colEnd = matrix[0].length - 1;  // matrix[0].length = 3, colEnd = 2
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    };
    rowStart++; //  rowStart = 1
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    };
    colEnd--; //  colEnd = 1
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        result.push(matrix[rowEnd][i]);
      };
    };
    rowEnd--; //  rowEnd = 1
    if (colStart <= colEnd) {   //  1번 더  로직을 탄다.
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(matrix[i][colStart]);
      };
    };
    colStart++; //  colStart = 1 
  }
  return result;
};

// time complexity 20%

// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));


// Solution 2

var spiralOrder2 = function(matrix) {
  
};

console.log(spiralOrder2([[1,2,3],[4,5,6],[7,8,9]]));
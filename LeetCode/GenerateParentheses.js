var generateParenthesis = function(n) {
  const result = [];
  const generate = (left, right, str) => {
    if (left === 0 && right === 0) {
      result.push(str);
      return;
    }
    if (left > 0) {
      generate(left - 1, right, str + "(");
    }
    if (right > left) {
      generate(left, right - 1, str + ")");
    }
  }
  generate(n, n, "");
  return result;
};


console.log(generateParenthesis(1));
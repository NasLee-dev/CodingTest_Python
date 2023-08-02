var answer = function(s) {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let arr = input[0].split(' ').map(Number);

  arr.sort(function(a, b) {
    return a - b;
  });

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] + " ";
  }
  console.log(answer);
};

answer(s=[5, 4, 3]);
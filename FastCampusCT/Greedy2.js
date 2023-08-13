//  자신보다 적게 인출하는 시간이 걸리는 사람이 앞에 위치하도록 정렬
//  그리디 알고리즘을 사용하여 최소 시간을 구하는 문제

var ATMSolution = function (arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * (arr.length - i);
  }
  return sum;
}

console.log(ATMSolution([3, 1, 4, 3, 2])); // 32

var ATMSolutionV2 = function() {
  let fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let n = Number(input[0]); // 사람 수
  let arr = input[1].split(" ").map((el) => Number(el));  //  각 사람이 인출하는데 걸리는 시간

  arr.sort((a, b) => a - b);

  let answer = 0;
  let summary = 0;

  for (let i = 0; i < n; i++) {
    summary += arr[i];
    answer += summary;
  }
  console.log(answer);
};
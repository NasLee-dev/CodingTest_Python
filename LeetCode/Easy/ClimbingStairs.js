var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  
  let first = 1,
      second = 2,
      third;
  
  for (let i = 3; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }
  return third;
};

console.log(climbStairs(4));
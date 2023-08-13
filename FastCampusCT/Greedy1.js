var minCoins = function (coins, amount) {
  let n = coins.length;
  let count = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (amount === 0) break;
    if (coins[i] <= amount) {
      count += Math.floor(amount / coins[i]);
      amount %= coins[i];
    }
  }
  return count;
};

console.log(minCoins([1, 5, 10, 50, 100, 500, 1000, 2000], 4720));

// 2000 : 2, 500 : 1, 100 : 2, 10 : 2

var minCoinsV2 = function() {
  let fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");
  
  let n = Number(input[0].split(" ")[0]);
  let k = Number(input[0].split(" ")[1]);
  
  let coins = [];
  for (let i = 1; i <= n; i++) {
    coins.push(Number(input[i]));
  };
  
  let cnt = 0;
  for(let i = n - 1; i >= 0; i--) {
    cnt += Math.floor(k / coins[i]);
    k %= coins[i];
  };
  
  console.log(cnt);
};

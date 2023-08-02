var romanToInt = function(s) {
  const map = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
  }
  let result = 0;
  let prev = null;

  for(let i = 0; i < s.length; i++) {
      if(prev && prev < map[s[i]]) {
          result = result - prev - prev;
      }
      prev = map[s[i]];
      result += map[s[i]];
  }
  return result;
};

/**
  1000
  100
  1000
  10
  100
  1
  5
 * */

console.log(romanToInt(s="MCMXCIV"));
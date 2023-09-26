const digits = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['k', 'j', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'y', 'x', 'z']
};

// var letterCombinations = function(digits) {
//   if(digits.length === 0) return [];
//   if(digits.length === 1) return getLetters(digits[0]);
//   let firstLetters = getLetters(digits[0]);
//   let secondLetters = getLetters(digits[1]);
//   let result = [];
//   for (let i = 0; i < firstLetters.length; i++) {
//     for (let j = 0; j < secondLetters.length; j++) {
//       result.push(firstLetters[i] + secondLetters[j]);
//     };
//   }
//   return result;
// };

// var getLetters = function(digit) {
//   let letters = [];
//   for (let i = 0;  i < digit.length; i++) {
//     letters.push(digit[i]);
//   };
//   return letters;
// };

var letterCombinations = function(digits) {
  if (digits.length === 0) return [];

  const phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const output = [];

  backtrack("", digits, phone_map, output);
  return output;

  function backtrack(combination, next_digits, phone_map, output) {
    if (next_digits.length === 0) {
      output.push(combination);
    } else {
      const letters = phone_map[next_digits[0] - 2];
      for (const letter of letters) {
        backtrack(combination + letter, next_digits.slice(1), phone_map, output);
      }
    }
  }
};

console.log(letterCombinations('23'));
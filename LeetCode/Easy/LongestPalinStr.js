var longestPalindrome = function(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let odd = expand(s, i, i);
    let even = expand(s, i, i + 1);
    if (odd.length > result.length) {
      result = odd;
    }
    if (even.length > result.length) {
      result = even;
    }
  }
  return result;
}

function expand(s, start, end) {
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    start--;
    end++;
  }
  return s.slice(start + 1, end);
}

console.log(longestPalindrome(s = "babad"));


// solution 2
var longestPalindrome = function (string) {
  let longestPal = '';

  var getLongestPalindrome = function (leftPosition, rightPosition) {
      // While there is space to expand, and the expanded strings match
      while (
          leftPosition >= 0 &&
          rightPosition < string.length &&
          string[leftPosition] === string[rightPosition]
      ) {
          // Expand in each direction.
          leftPosition--;
          rightPosition++;
      }

      // Store the longest palindrom (if it's the longest one found so far)
      if (rightPosition - leftPosition > longestPal.length) {
          longestPal = string.slice(leftPosition + 1, rightPosition);
      }
  };

  // Loop through the letters
  for (let i = 0; i < string.length; i++) {
      // Find the longest odd palendrome
      getLongestPalindrome(i, i + 1);

      // Find the longest even palendrome
      getLongestPalindrome(i, i);

      // Check if a longer palindrome cannot be found
      if ((string.length - i) * 2 < longestPal.length) {
          // Break out to avoid unnecessary computation
          break;
      }
  }

  return longestPal;
};

// sol 3
var longestPalindrome2 = function(s) {
  let result = "";

  for(let i = 0; i < s.length; i++) {
      let char = s[i];
      let left = i;
      let right = i;

      while (left > 0 && s[left-1] === char) {
          left--;
      }
      while (right < s.length && s[right + 1] === char) {
          right++;
          i++;
      }
      while (left >= 0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
          left--;
          right++;
      }
      if (result.length < (right - left + 1)) result = s.slice(left, right + 1);
  }
  return result;
};
var lengthOfLongestSubstring = function(s) {
  var max = 0;
  var start = 0;
  var map = {};
  for(var i = 0; i < s.length; i++) {
    var ch = s[i];
    if(map[ch] !== undefined && map[ch] >= start) {
        start = map[ch] + 1;
    }
    map[ch] = i;
    max = Math.max(max, i - start + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
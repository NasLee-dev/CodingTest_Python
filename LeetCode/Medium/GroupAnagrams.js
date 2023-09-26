var groupAnagrams = function(strs) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i];
    sorted = sorted
      .split("")
      .sort()
      .join("");
    if (map.has(sorted)) {
      let index = map.get(sorted);
      result[index].push(strs[i]);
    }
    else {
      map.set(sorted, result.length);
      result.push([strs[i]]);
    }
  }
  return result;
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
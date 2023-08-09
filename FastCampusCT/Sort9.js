var ageSort = function(ages) {
  let arr = [];
  let n = Numer(ages[0]);
  for (let i = 1; i <= n; i++) {
    let age = Number(ages[i].split(' ')[0]);
    let name = ages[i].split(' ')[1];
    arr.push([age, name]);
  }
  arr.sort((a, b) => a[0] - b[0]);  // stable sort

  let result = '';
  for (let x of arr) {
    result += x[0] + ' ' + x[1] + '\n';
  }
  return result;
};
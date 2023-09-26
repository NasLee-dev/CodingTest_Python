function ListNode(val) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
};

var isPalindrome = function(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};


console.log(isPalindrome(head= [1,2,2,1]));

// 어렵다.


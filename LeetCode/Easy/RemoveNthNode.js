function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
};

// 1번 솔루션
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
};

console.log(removeNthFromEnd([1,2,3,4,5], 2));

// 2번 솔루션
var removeNthFromEnd2 = function(head, n) {
  let arr = [];
  let res = new ListNode(0);
  let copy = res;
  while (head) {
    arr.push(head);
    head = head.next;
  };
  for(let i = 0; i < arr.length; i++) {
    if (arr.length - i === n ) continue;
    copy.next = new ListNode(arr[i]);
    copy = copy.next;
  }
  return res.next;
}
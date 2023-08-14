function ListNode(val) {
  this.val = val;
  this.next = next === undefined ? null : next;
};

var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while(curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
};

console.log(reverseList([1,2,3,4,5]));
function ListNode(val) {
  this.val = val;
  this.next = null;
};

var getInterNode = function(headA, headB) {
  let pointerA = headA;
  let pointerB = headB;
  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }
  return pointerA;
};
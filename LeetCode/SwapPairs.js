function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
};

var swapPairs = function(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;
  while (current.next !== null && current.next.next !== null) {
    current.next = swap(current.next, current.next.next);
    current = current.next.next;
  }
  return dummy.next;
};

var swap = function(node1, node2) {
  node1.next = node2.next;
  node2.next = node1;
  return node2;
};


console.log(swapPairs([1,2,3,4]));
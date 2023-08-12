

function ListNode(val) {
  this.val = val;
  this.next = null;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
  let start = ListNode(head);
  while(head) {
      if(head.val === 'x') {
          return true;
      }
      head.val = 'x';
      head = head.next;
  }
  return false;
};

console.log(hasCycle(head = [3,2,0,-4]));
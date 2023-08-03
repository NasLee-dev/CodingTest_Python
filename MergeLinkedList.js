var mergeTwoLists = function(l1, l2) {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;

  // l1과 l2 둘 다 계속 있는 한 while문 
  while (l1 && l2) {
    // 둘 다 더 작은 노드를 currentNode의 다음 포인터에 넣음.
      if (l1.val < l2.val) {
          currentNode.next = l1;
          l1 = l1.next;
      } else {
          currentNode.next = l2;
          l2 = l2.next;
      }
      // currentNode 다음 포인터로 이동 => 다시 위의 로직 반복.
      currentNode = currentNode.next;
  }
  //  while 문을 빠져 나왔다면, l1과 l2 둘 다 노드가 없거나, 둘 중 하나만 있음. 나머지 노드들 추가.
  currentNode.next = l1 || l2;
  //  tempNode의 첫 번째 노드는 0이니 그 다음 노드부터 리턴하여 답 제출.
  return tempNode.next;
};
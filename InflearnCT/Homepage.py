# BrowserHistory(string homepage)를 호출하면 브라우저는 homepage에서 시작이 된다.
# void visit(string url)을 호출하면 현재 page의 앞에 있는 페이지 기록은 다 삭제가 되고 url로 방문을 한다.
# string back(int steps)을 호출하면 steps수 만큼 "뒤로 가기"를 한다. "뒤로 가기"를 할 수 있는 page 개수가 x이고
# step > x 라면 x번 만큼만 "뒤로 가기"를 한다. "뒤로 가기"가 완료되면 현재 url을 return한다.
# string forward(int steps)을 호출하면 steps수 만큼 "앞으로 가기"를 한다. "앞으로 가기"를 할 수 있는
# page 개수가 x이고 step > x라면 x번 만큼만 "앞으로 가기"를 한다.
# 1 <= step <= 100
# visit, back, forward는 최 5000번의 호출이 있을 수 있다.


class ListNode(object):
  def __init__(self, val = 0, next = None, prev = None):
    self.val = val;
    self.next = next;
    self.prev = prev;

class BrowserHistory(object):
  def __init__(self, homepage):
    # self.head = self.current = ListNode(val=homepage);
    self.current = ListNode(val=homepage);
  def visit(self, url):
    self.current.next = ListNode(val=url, prev=self.current);
    self.current = self.current.next;
    
  def back(self, steps):
    while steps > 0 and self.current.prev != None:
      steps -= 1
      self.current = self.current.prev;
    return self.current.val;
    
  def forward(self, steps):
    while steps > 0 and self.current.next != None:
      steps -= 1
      self.current = self.current.next;
    return self.current.val;
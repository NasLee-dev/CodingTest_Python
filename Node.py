class Node :
  def __init__(self, value = 0, next = None):
    self.value = value
    self.next = next
    


class LinkedList(object):
  def __init__(self):
    self.head = None;
    self.size = 0;                 # node의 갯수 
  def append(self, value):
    new_node = Node(value);
    if self.head is None:
      self.head = new_node;
    else:
      current = self.head;
      while(current.next):
        current = current.next;     # 다음 노드가 있는 한 계속 진행.(None이 아닌 한)
      current.next = new_node;
  def get(self, idx):
    current = self.head;
    for _ in range(idx):
      current = current.next;
    return current.value;
  def remove(self, idx):
    pass;
  def insertAt(self, idx, value):
    new_node = Node(value);
    current = self.head;
    if idx == 0:
      new_node.next = self.head;
      self.head = new_node;
    else:
      for _ in range(idx - 1):
        current = current.next;
      new_node.next = current.next;       # 예) 2번 노드와 3번 노드 사이의 4번 노드가(new_node) 추가될 시, 2번 노드에 있는 3번 노드의 주소값(next)를 4번 노드의 주소값에 넣고, 2번 노드의 주소값에 새로운 노드를 넣음(4번 노드)
      current.next = new_node;
  def printAll(self):
    current = self.head;
    while(current):
      print(current.value);
      current = current.next;
    print("-------------------");
      
li = LinkedList();
li.append(2);
li.append(3);
li.insertAt(0,10);
li.printAll
      
# BigO(1)
class LinkedList2(object):
  def __init__(self):
    self.head = None;
    self.tail = None;
  def append(self, value):
    new_node = Node(value);
    if self.head is None:
      self.head = new_node;
      self.tail = new_node;
    else:
      self.tail.next = new_node;
      self.tail = self.tail.next;
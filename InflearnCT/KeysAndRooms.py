from collections import deque

def KeysAndRooms(rooms):
  visited = {}
  
  # v에 연결되어있는 모ㄴ vertex에 방문할거다.
  def dfs(v):
    visited[v] = True
    for next_v in rooms[v]:
      if next_v not in visited:         # 재귀 멈출 수 있는 조건.
        dfs(next_v)
    
  dfs(0)
  
  if len(visited) == len(rooms): 
    return True
  else: 
    return False
  pass


rooms = [[1, 3], [2, 4], [0], [4], [], [3, 4]]
print(KeysAndRooms(rooms))


def KeysAndRoomsBFS(rooms):
  visited = [False] * len(rooms)
  
  # v에 연결되어있는 모ㄴ vertex에 방문할거다.
  def bfs(v):
    queue = deque()
    queue.append(v)
    visited[v] = True
    
    while queue:
      cur_v = queue.popleft()
      for next_v in rooms[cur_v]:
        if visited[next_v] == False:
          queue.append(next_v)
          visited[next_v] = True
    
  bfs(0)
  
  return all(visited)

print(KeysAndRoomsBFS(rooms))
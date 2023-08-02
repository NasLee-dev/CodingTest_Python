def temperCheck(temper):
  answer = [0] * len(temper);
  stack = [];
  
  for cur_day, cur_temp in enumerate(temper):      # enumerate : [index, value]
    while stack and stack[-1][1] < cur_temp:
      prev_day, _ = stack.pop();
      answer[prev_day] = cur_day - prev_day;
    stack.append((cur_day, cur_temp));
  return answer;

print(temperCheck([70, 71, 73, 68, 69, 50, 78, 75, 80]));
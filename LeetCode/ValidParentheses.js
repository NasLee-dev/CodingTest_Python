class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    if(this.item.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

var isValid = function(s) {
  let stack = [];
  for (let a of s) {
      if (a === "(") {
          stack.push(")")
      } else if (a === "[") {
          stack.push("]")
      } else if (a === "{") {
          stack.push("}")
      } else {
        let top = stack[stack.length - 1];
        if(a === ")" && top === ")" || a === "]" && top === "]" || a === "}" && top === "}") {
          stack.pop();
          
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
};

console.log(isValid(s="()"));
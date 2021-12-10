const Stack = require("../stack/stack");

function brackets(string) {
  let newStack = new Stack();
  const arr = string.replace(/[a-zA-Z\s]/g, "").split("");
  arr.map((e) => {
    if (e == "{" || e == "[" || e == "(") {
      newStack.push(e);
    } else if (e === "}" && newStack.top.value === "{") {
      newStack.pop();
    } else if (e === "]" && newStack.top.value === "[") {
      newStack.pop();
    } else if (e === ")" && newStack.top.value === "(") {
      newStack.pop();
    } else {
      return false;
    }
  });
}

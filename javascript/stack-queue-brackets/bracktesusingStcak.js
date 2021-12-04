"use strict";

const Stack = require("./Stack");
const newStack = new Stack();
function validatorBracktes(string) {
  let stringWIthout = string.replace(/[a-zA-Z\s]/g, "").split("");

  if (stringWIthout.lenght) {
    return "empty string";
  }
  stringWIthout.map((e) => {
    if (e == "(" || e == "{" || e == "[") {
      newStack.push(e);
    } else if (e == ")" && newStack.top.value == "(") {
      newStack.pop();
    } else if (e == "]" && newStack.top.value == "[") {
      newStack.pop();
    } else if (e == "}" && newStack.top.value == "{") {
      newStack.pop();
    } else {
      return false;
    }
    if (!stringWIthout.top) {
      return true;
    } else {
      return false;
    }
  });
}

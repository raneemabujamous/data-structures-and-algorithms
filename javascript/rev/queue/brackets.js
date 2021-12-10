let validBrackets = (string) => {
  let open = [];
  let close = [];
  for (let i = 0; i < string.length; i++) {
    if (i == "(" || i == "[" || i == "}") {
      open.push(e);
    }
    if (i == "}" || i == "]" || i == ")") {
      close.push(e);
    }
  }
  if (close.length === open.length && open.length != 0) {
    if (
      (open.includes("(") && close.includes(")")) ||
      (open.includes("{") && close.includes("}")) ||
      (open.includes("[") && close.includes("]"))
    ) {
      return true;
    }
  } else {
    false;
  }
};
module.exports = validBrackets;

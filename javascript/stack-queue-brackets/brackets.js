let validateBrackets = (bracket) => {
  let open = [];
  let close = [];
  let result;
  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] == "(" || bracket[i] == "[" || bracket[i] == "{") {
      open.push(bracket[i]);
    }
    if (bracket[i] == ")" || bracket[i] == "]" || bracket[i] == "}") {
      close.push(bracket[i]);
    }
  }

  if (open.length != close.length || open.length == 0) {
    return (result = false);
  }
  for (let j = 0; j < open.length; j++) {
    if (
      (open[j] == "(" && bracket.includes(")")) ||
      (open[j] == "{" && bracket.includes("}")) ||
      (open[j] == "[" && bracket.includes("]"))
    ) {
      result = true;
    } else {
      result = false;
    }
  }

  return result;
};

module.exports = validateBrackets;

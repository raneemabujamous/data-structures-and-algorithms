const validateBrackets = require("../brackets");
describe("test validate brackets", () => {
  test("should give true ", () => {
    expect(validateBrackets("()")).toBe(true);
    expect(validateBrackets("[]")).toBe(true);
    expect(validateBrackets("{()}")).toBe(true);
  });
  test("should give false ", () => {
    expect(validateBrackets("}}()")).toBe(false);
    expect(validateBrackets("{[]")).toBe(false);
    expect(validateBrackets("{()})")).toBe(false);
  });
});

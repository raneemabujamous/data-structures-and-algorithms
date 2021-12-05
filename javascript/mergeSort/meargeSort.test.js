const mergeSort = require("./mergeSort");
describe("test inseration", () => {
  test("should give sort array  ", () => {
    let array = [4, 3, 2, 1];
    let result = [1, 2, 3, 4];
    expect(mergeSort(array)).toEqual(result);
  });
  test("should give sort array have repeated number  ", () => {
    let array = [8, 4, 23, 42, 16, 15];
    let result = [4, 8, 15, 16, 23, 42];
    expect(mergeSort(array)).toEqual(result);
  });
  test("should give sort array have negative   ", () => {
    let array = [20, 18, 12, 8, 5, -2];
    let result = [-2, 5, 8, 12, 18, 20];
    expect(mergeSort(array)).toEqual(result);
  });
});

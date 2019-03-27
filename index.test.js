const Calc = require("./index");

describe("Calculator tests", () => {
  test("should be able to add 1 + 1", () => {
    expect(new Calc(1).add(1)).toEqual({ num: 2 });
  });

  test("should be able to add multiple numbers", () => {
    expect(new Calc(1).add(1).add(1)).toEqual({ num: 3 });
  });

  test("should be able to substract 3 from 4", () => {
    expect(new Calc(4).substract(3)).toEqual({ num: 1 });
  });

  test("should be able to multiply 2 by 8", () => {
    expect(new Calc(2).multiply(8)).toEqual({ num: 16 });
  });

  test("should be able to divide 15 by 5", () => {
    expect(new Calc(15).divide(5)).toEqual({ num: 3 });
  });

  test("Dont accept strings", () => {
    expect(() => new Calc(100).add("onehundret")).toThrow("No strings allowed");
  });

  test("Dont accept object", () => {
    expect(() => new Calc(100).add({ num: "onehundret" })).toThrow(
      "No object allowed"
    );
  });
});

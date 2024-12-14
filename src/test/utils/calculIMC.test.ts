import calculIMC from "../../utils/calculIMC";

describe("calculIMC function", () => {
  test("should return with size 170 cm and eight 80 kg equal to 27.7 ", () => {
    const result = calculIMC(170, 80);
    const expectedResult = 27.7;
    expect(result).toBe(expectedResult);
  });
  test("should throw error if parameters are not numbers", () => {
    const ERROR_Message = "Parameters should be numbers" as const;
    expect(() => calculIMC("100", 10)).toThrow(ERROR_Message);
    expect(() => calculIMC(100, "10")).toThrow(ERROR_Message);
  });
  test("should throw error if parameters are negative", () => {
    const ERROR_MESSAGE = "Parameters should be strictly positives";
    expect(() => calculIMC(-1, 10)).toThrow(ERROR_MESSAGE);
    expect(() => calculIMC(0, 10)).toThrow(ERROR_MESSAGE);
    expect(() => calculIMC(10, -1)).toThrow(ERROR_MESSAGE);
    expect(() => calculIMC(10, 0)).toThrow(ERROR_MESSAGE);
  });
});

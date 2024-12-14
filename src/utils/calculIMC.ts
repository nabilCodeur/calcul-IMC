const calculIMC = (size: number, weight: number): number => {
  const PRECISION_DECIMAL = 1;
  if (typeof size !== "number" || typeof weight !== "number")
    throw new Error("Parameters should be numbers");
  if (size <= 0 || weight <= 0)
    throw new Error("Parameters should be strictly positives");

  return Number((weight / Math.pow(size / 100, 2)).toFixed(PRECISION_DECIMAL));
};

export default calculIMC;

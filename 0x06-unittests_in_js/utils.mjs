export const Utils = {
  calculateNumber(type, a, b) {
    if (type === "SUM") {
      return Math.round(a) + Math.round(b);
    }
    throw new Error("Invalid operation type");
  },
};

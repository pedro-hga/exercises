export const convert = (arg) => {
  let result = "";

  if (arg % 3 === 0) {
    result = "Pling"
  }
  if (arg % 5 === 0) {
    result += "Plang"
  }
  if (arg % 7 === 0) {
    result += "Plong"
  }
  return result || arg.toString();
};

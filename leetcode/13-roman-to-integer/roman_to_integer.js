/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // create conversion table
  const table = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  const str = s.replace(/\s+/g, '')
  const arr = str.split('').map(char => table[char]);

  let result = 0;
  let sum = 0;

  for (let i = 0; i < arr.length;) {
    let curr = arr[i];
    let next = arr[i+1] === undefined ? false : arr[i+1];
    if (next && curr > next) {
      result += curr;
      i++;
    } else if (next && curr === next ) {
      sum += curr;
      if (arr[i+2] < curr) {
        result += sum;
        sum = 0;
      };
      i++
    } else if (next && curr < next){
      result += next - curr;
      i += 2;
    } else {
      curr > sum ? result += curr - sum : result += curr + sum;
      i++;
    };
  };
    return result;
};

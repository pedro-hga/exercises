// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  // takes in two arrays
  // go through the first array and make it a single number
  const num1 = array1.reduce((accumulator, currentValue) =>
    Number(String(accumulator) + currentValue),
  );
  // go through the second array and make it a single number
  const num2 = array2.reduce((accumulator, currentValue) =>
    Number(String(accumulator) + currentValue),
  );
  // sum the two numbers
  return num1 + num2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */

export function luckyNumber(value) {
  const rev = Number(value.toString().split("").reverse().join(""));
  return rev === value;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === '' || input === null || input === undefined) {
    return 'Required field';
  }
  if (Number(input)) {
    return '';
  }
  return 'Must be a number besides 0';
}

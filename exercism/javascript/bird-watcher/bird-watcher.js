// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  var sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum = birdsPerDay[i] + sum;
  }
  return sum;
}

/**
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let total = 0
  var weekIndex = (week * 7) - 7;
  if (week === 1) {
    total = totalBirdCount(birdsPerDay.slice(0, 7))
  } else {
    for (let i = weekIndex; i < weekIndex + 8; i++) {
      console.log(weekIndex);
      total = totalBirdCount(birdsPerDay.slice(weekIndex, weekIndex + 7));
    }
  }
  return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  birdsPerDay[0] += 1;
  for (let i = 2; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay
}

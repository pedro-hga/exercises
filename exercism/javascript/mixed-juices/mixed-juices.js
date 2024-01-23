// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */

// juices
const strawberryJoy = 0.5;
const energizerGreenGarden = 1.5;
const tropicalIsland = 3.0;
const allOrNothing = 5.0;

// lime wedges
const smallWedge = 6;
const mediumWedge = 8;
const largeWedge = 10;


export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return strawberryJoy;
    case "Energizer":
    case "Green Garden":
      return energizerGreenGarden;
    case "Tropical Island":
      return tropicalIsland;
    case "All or Nothing":
      return allOrNothing;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

export function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  let sum = 0;
  let limeCount = 0;
  while (sum < wedgesNeeded && i < limes.length) {
    switch (limes[i]) {
      case "small":
        sum += smallWedge;
        limeCount += 1;
        break;
      case "medium":
        sum += mediumWedge;
        limeCount += 1;
        break;
      case "large":
        sum += largeWedge;
        limeCount += 1;
        break;
      default:
        break;
    }
    i++;
  }
  return limeCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time = 0;
  let i = 0;
  let remaining = []
  while (i < orders.length) {
    if (time >= timeLeft) {
      remaining.push(orders[i])
    }
    time += timeToMixJuice(orders[i])
    i++
  }
  return remaining;
}

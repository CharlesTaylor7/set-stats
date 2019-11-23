import wu from 'wu'
import choose from './choose'
import unrankCombination from './unrankCombination'
import enumerateCombinations from './enumerateCombinations'

const nums = [0, 1, 2];

export const deck = Array.from(generateCards());

function* generateCards() {
  for (let q1 of nums) {
    for (let q2 of nums) {
      for (let q3 of nums) {
        for (let q4 of nums) {
          yield [q1, q2, q3, q4]
        }
      }
    }
  }
}

function isSet(c1, c2, c3) {
  for (let dim of [0, 1, 2, 3]) {
    const allTheSame =
      c1[dim] == c2[dim] &&
      c1[dim] == c3[dim];
    const allDifferent =
      c1[dim] != c2[dim] &&
      c1[dim] != c3[dim];

    if (!allTheSame && !allDifferent) {
      return false;
    }
  }
  return true;
}

const countSets = (cards) => wu(enumerateCombinations(cards.length, 3))
.filter(combination => isSet(...combination.map(i => cards[i])))
.tap(console.log)
.reduce(total => total + 1, 0)

function randomInt(m) {
  return Math.floor(Math.random() * m);
}

function randomCombination(n, k) {
  const max = choose(n, k);
  const rank = randomInt(max);
  const combination = unrankCombination(n, k, rank);
  return combination;
}

/**
 * Returns the average number of sets for a given amount of cards
 * @param {number} n size of the tableau
 */
export function averageNumberOfSets(n) {
  const sampleSize = 100;
  const totalSets = wu(Array.from({ length: sampleSize }, () => randomCombination(81, n)))
  .map(tableau => countSets(tableau.map(i => deck[i])))
  .reduce(total => total + 1, 0)

  return totalSets / sampleSize;
}

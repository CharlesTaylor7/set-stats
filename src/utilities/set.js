import wu from 'wu'
import choose from './choose'
import unrankCombination from './unrankCombination'
import countSets from './countSets'

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

function randomInt(m) {
  return Math.floor(Math.random() * m);
}

function randomCombination(n, k) {
  const max = choose(n, k);
  const rank = randomInt(max);
  const combination = unrankCombination(n, k, rank);
  return combination;
}

export const randomTrial = (n) => countSets(
  randomCombination(81, n)
  .map(i => deck[i])
)

/**
 * Returns the average number of sets for a given amount of cards
 * @param {number} n size of the tableau
 */
export function averageNumberOfSets(n, sampleSize = 1000) {
  const totalSets = wu(Array.from({ length: sampleSize }, () => randomTrial(n)))
  .reduce((total, acc) => total + acc, 0)

  return totalSets / sampleSize;
}

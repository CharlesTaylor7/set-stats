import countSetsFromCardRanks from './countSetsFromCardRanks';
import { rankCard } from './set';

const countSets = cards => countSetsFromCardRanks( cards.map(rankCard));

test('empty tableau has no sets', () => {
  expect(countSets([])).toBe(0)
})

test('tableau of 1 card has no sets', () => {
  expect(countSets([
    [0, 1, 2, 2]
  ])).toBe(0)
})

test('tableau of 2 cards has no sets', () => {
  expect(countSets([
    [0, 1, 2, 2],
    [0, 0, 0, 0],
  ])).toBe(0)
})

test('tableau of 3 cards that is not a set', () => {
  expect(countSets([
    [0, 1, 2, 2],
    [0, 0, 0, 0],
    [2, 1, 1, 1],
  ])).toBe(0)
})

test('tableau of 3 cards that is a set', () => {
  expect(countSets([
    [0, 1, 2, 2],
    [1, 1, 0, 0],
    [2, 1, 1, 1],
  ])).toBe(1)
})

test('tableau of 5 cards with 2 different sets', () => {
  expect(countSets([
    [0, 1, 2, 2],
    [1, 1, 0, 0],
    [2, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
  ])).toBe(2)
})

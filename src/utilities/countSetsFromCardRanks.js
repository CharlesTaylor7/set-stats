import wu from 'wu'
import enumerateCombinations from "./enumerateCombinations"
import { rankCard, unrankCard } from './set';
import complementaryCard from './complementaryCard';

const countSets = (ranks) => {
  const set = new Set(ranks);

  const numPairs = wu(
    enumerateCombinations(ranks.length, 2)
  )
  .filter(combination => {
    const [i, j] = combination;
    const card1 = unrankCard(ranks[i]);
    const card2 = unrankCard(ranks[j]);
    const complement = complementaryCard(card1, card2);
    const complementRank = rankCard(complement);

    return set.has(complementRank);
  })
  .reduce(total => total + 1, 0);

  return numPairs / 3;
}

export default countSets;

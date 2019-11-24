import wu from 'wu'
import enumerateCombinations from "./enumerateCombinations"
import isSet from "./isSet"

const countSets = (cards) => wu(enumerateCombinations(cards.length, 3))
.map(combination => combination.map(i => cards[i]))
.filter(toTest => isSet(...toTest))
.tap(console.log)
.reduce(total => total + 1, 0)

export default countSets;

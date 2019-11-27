import wu from 'wu'

const threesComplement = (a, b) => (6 - (a + b)) % 3;
const complementaryCard = (card1, card2) => wu.zipWith(threesComplement, card1, card2).toArray();

export default complementaryCard;

import unrankCombination from "./unrankCombination"
import enumerateCombinations from "./enumerateCombinations";

test("unrank", () => {
  const combinationsViaUnranking = Array.from({length: 10}, (_, i) => unrankCombination(5, 3, i));
  const combinationsViaSuccessor = Array.from(enumerateCombinations(5, 3));

  expect(combinationsViaUnranking)
    .toEqual(combinationsViaSuccessor);
})

import unrankCombination from "./unrankCombination"
import enumerateCombinations from "./enumerateCombinations";

test("unrank (5, 2, 0)", () => {
  expect(unrankCombination(5, 2, 0))
    .toEqual([0, 1])
})

test("unrank (5, 2, 1)", () => {
  expect(unrankCombination(5, 2, 1))
    .toEqual([0, 2])
})

test("unrank (5, 2, *)", () => {
  const combinationsViaUnranking = Array.from({length: 10}, (_, i) => unrankCombination(5, 2, i));
  const combinationsViaSuccessor = Array.from(enumerateCombinations(5, 2));

  expect(combinationsViaUnranking)
    .toEqual(combinationsViaSuccessor);
})

import { deck, rankCard, unrankCard } from "./set"

test("deck", () => {
  expect(deck).toHaveLength(81);
})

test("rank-unrank roundtrip", () => {
  const card = [1, 0, 2, 2];
  const rank = rankCard(card);
  const unranked = unrankCard(rank);
  expect(card).toEqual(unranked);
})

test("unrank-rank roundtrip", () => {
  const rank = 34;
  const card = unrankCard(rank);
  const ranked = rankCard(card);
  expect(rank).toEqual(ranked);
})

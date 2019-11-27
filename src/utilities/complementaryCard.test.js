import complementaryCard from "./complementaryCard"

test('complementaryCard', () => {
  expect(complementaryCard(
    [0, 0, 0, 0],
    [1, 1, 1, 1]
  )).toEqual([2, 2, 2, 2])
})

test('complementaryCard', () => {
  expect(complementaryCard(
    [1, 2, 1, 0],
    [0, 2, 1, 1],
  )).toEqual([2, 2, 1, 2])
})

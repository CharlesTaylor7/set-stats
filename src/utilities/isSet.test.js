import isSet from './isSet'

test('isSet (true)', () => {
  expect(isSet([0, 0, 0, 0], [0, 2, 1, 2], [0, 1, 2, 1]))
    .toBe(true)
})

test('isSet (false)', () => {
  expect(isSet([0, 0, 0, 1], [0, 2, 1, 2], [0, 1, 2, 1]))
    .toBe(false)
})

test('isSet false positive', () => {
  expext(isSet([
    [ 0, 1, 2, 2 ],
    [ 1, 1, 0, 0 ],
    [ 1, 1, 1, 1 ],
  ])).toBe(false)
})

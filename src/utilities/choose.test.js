import choose from "./choose"

test("0 choose 0", () => {
 expect(choose(0, 0)).toBe(1);
})

test("1 choose 0", () => {
  expect(choose(1, 0)).toBe(1);
})

test("1 choose -1", () => {
  expect(choose(1, -1)).toBe(0);
})

test("1 choose -1", () => {
  expect(choose(1, -1)).toBe(0);
 })

test("5 choose 2", () => {
  expect(choose(5, 2)).toBe(10);
})

test("5 choose 3", () => {
  expect(choose(5, 3)).toBe(10);
})

import choose from "./choose";

function unrankCombination(n, k, r) {
  const T = [];
  let x = 1;
  for (let i = 1; i <= k; i++) {
    const beeg = choose(n - x, k - i);
    while (beeg <= r) {
      r -= beeg
      x++;
    }
    T[i-1] = x;
    x++;
  }

  return T;
}

export default unrankCombination;

import choose from "./choose";

function unrankCombination(n, k, r) {
  const T = [];
  let x = 1;
  for (let i = 1; i <= k; i++) {
    while (true) {
      const beeg = choose(n - x, k - i);
      if (beeg > r) break;
      r -= beeg
      x++;
    }
    T[i-1] = x - 1;
    x++;
  }
  return T;
}

export default unrankCombination;

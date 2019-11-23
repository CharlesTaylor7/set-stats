
// Pascals triangle, but just half
const P = [[1]]

const choose = (n, k) => {
  if (k < 0 || k > n || n < 0) return 0;
  if (n >= P.length) {
    for (let m = P.length; m <= n; m++) {
      P[m] = [];
      P[m][0] = 1;
      for (let k = 1; k < m / 2; k++) {
        P[m][k] = P[m-1][k-1] + P[m-1][k];
      }
      if (m % 2 == 0) {
        let k = m / 2;
        P[m][k] = P[m-1][k - 1] + P[m-1][k - 1];
      }
    }
  }
  if (k > n / 2) return P[n][n - k]

  return P[n][k];
}

export default choose;

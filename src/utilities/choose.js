
// Pascals triangle
const P = [[0]]

const choose = (n, k) => {
  if (k < 0 || k > n || n < 0) return 0;
  if (n > P.length) {
    for (let m = P.length; m <= n; m++) {
      P[m] = [];
      P[m][0] = 1;
      P[m][m] = 1;
      for (let k = 1; k < m; k++) {
        P[m][k] = P[m-1][k-1] + P[m-1][k]
      }
    }
  }
  return P[n][k];
}

export default choose;

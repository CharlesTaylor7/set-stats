
function isSet(c1, c2, c3) {
  for (let dim of [0, 1, 2, 3]) {
    const sum = c1[dim] + c2[dim] + c3[dim];
    if (sum % 3 !== 0) return false;
  }
  return true;
}

export default isSet;

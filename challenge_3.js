/**
 *
 * REFACTORING
 *
 * After having fixed the typos from the file 'challenge_1.js',
 * please refactor the file
 *
 * DIFFICULTY: Medium
 *
 */

const MatrixA = [
  [1, 2, 3],
  [2, 3, 4],
  [4, 5, 6],
];

const MatrixB = [
  [2, 3, 1],
  [0, 0, 0],
  [1, 5, 3],
];

// Assuming the matrices passed are both 3x3 in size
function multiplyMatrices(a, b) {
  const newMatrix = [[], [], []];

  for (let i = 0; i < 3; i++)
    for (let k = 0; k < 3; k++) {
      let sum = 0;
      for (let j = 0; j < 3; j++) {
        sum += a[i][j] * b[j][k];
      }
      newMatrix[i][k] = sum;
    }

  return newMatrix;
}

console.log(multiplyMatrices(MatrixA, MatrixB));

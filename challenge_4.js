/**
 * OPTIMIZATIONS
 *
 * optimize this function as well as possible!
 *
 * Difficulty: hard
 *
 */

function mystery(x, y, z) {
  if (y < x)
    return mystery(
      mystery(x - 1, y, z),
      mystery(y - 1, z, x),
      mystery(z - 1, x, y)
    );
  return z;
}

console.log(mystery(2, 12, 20));

/**
For a given pair of a and b : Consider a Chess board of a × b squares. Now, for each of the squares; Imagine a Queen standing on that square and compute the number of squares under the queen's attack. Add all the numbers you get for each of the a × b possible queen's position and return it.

Examples :

For a = 2 and b = 2 : squaresUnderQueenAttack(2,2) => 12.
For a = 2 and b = 3 : squaresUnderQueenAttack(2,3) => 26.
Explaination :
 */

const horizontalSquares = (a) => {
  return a - 1
}

const verticalSquares = (b) => {
  return b - 1
}

const diagonalSquares = (x, y, a, b) => {
  let count = 0
  let current = [x, y]
  const dirs = [
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1],
  ]
  for (let dir of dirs) {
    while (
      current[0] >= 0 &&
      current[0] < a &&
      current[1] >= 0 &&
      current[1] < b
    ) {
      count++
      current[0] += dir[0]
      current[1] += dir[1]
    }
    count--
    current = [x, y]
  }
  return Math.max(0, count)
}

function chessboardSquaresUnderQueenAttack(a, b) {
  let total = 0

  for (let x = 0; x < a; x++) {
    for (let y = 0; y < b; y++) {
      total += horizontalSquares(a)
      total += verticalSquares(b)
      total += diagonalSquares(x, y, a, b)
    }
  }
  return total
}
chessboardSquaresUnderQueenAttack(1, 1) // 0
chessboardSquaresUnderQueenAttack(2, 2) // 12
chessboardSquaresUnderQueenAttack(1, 2) // 2
chessboardSquaresUnderQueenAttack(2, 3) // 26
chessboardSquaresUnderQueenAttack(5, 5) // 320

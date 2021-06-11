/*
You are given an m x n grid where each cell can have one of 
three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent 
to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until 
no cell has a fresh orange. If this is impossible, return -1.

Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0)
is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0,
the answer is just 0.

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
*/

const t1 = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]
const t2 = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 2],
]

const countSecondsToRot = (grid) => {
  let freshOranges = 0
  let seconds = 0
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  const queue = []

  const findInitialRotten = (arr) => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 2) {
          arr.push([i, j])
        }
        if (grid[i][j] === 1) {
          freshOranges++
        }
      }
    }
    return arr
  }

  let currentRound = findInitialRotten([])
  queue.push(currentRound)

  while (queue.length > 0) {
    currentRound = queue.pop()
    const nextRound = []
    for (let source of currentRound) {
      for (let dir of directions) {
        const newRow = source[0] + dir[0]
        const newCol = source[1] + dir[1]
        if (
          grid[newRow] &&
          grid[newRow][newCol] &&
          grid[newRow][newCol] === 1
        ) {
          grid[newRow][newCol] = 2
          freshOranges--
          nextRound.push([newRow, newCol])
        }
      }
    }
    if (nextRound.length > 0) {
      seconds++
      queue.push(nextRound)
    }
  }
  return freshOranges > 0 ? -1 : seconds
}

console.log(countSecondsToRot(t1)) // 4
console.log(countSecondsToRot(t2)) // 2

/**
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

Example 1:
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

Example 2:
Input: triangle = [[-10]]
Output: -10

Constraints:

1 <= triangle.length <= 200
triangle[0].length == 1
triangle[i].length == triangle[i - 1].length + 1
-104 <= triangle[i][j] <= 104

Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?
 */

// DFS solution, does not pass time-constraint on tests
const minimumTotal = (triangle) => {
  let minSum = Infinity
  let currentSum = 0

  const dfs = (row = 0, col = 0, currentSum = 0) => {
    // Add current nodes value to the sum
    currentSum += triangle[row][col]
    if (!triangle[row + 1]) {
      // If we reach bottom of tree update minumum sum
      minSum = Math.min(currentSum, minSum)
    } else {
      // Continue down the tree with child at same index until bottom of tree
      dfs(row + 1, col, currentSum)
      if (triangle[row + 1][col + 1] !== undefined) {
        // Continue down the tree with bottom-right child
        dfs(row + 1, col + 1, currentSum)
      }
    }
    // Backtrack: once we finish searching from a node, remove its value from current sum
    currentSum -= triangle[row][col]
  }
  dfs()
  // return minimum sum
  return minSum
}

// DP approach
const minimumTotal = (triangle) => {
  // Start from second to last row of the triangle
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      // For each element in the row, replace the el with the
      // small sum of the current element and the two children below it
      const downChild = triangle[i + 1][j]
      const downRightChild = triangle[i + 1][j + 1]
      triangle[i][j] = triangle[i][j] + Math.min(downChild, downRightChild)
    }
  }
  // Once you reach the top of the tree, you will have the minimum sum
  return triangle[0][0]
}

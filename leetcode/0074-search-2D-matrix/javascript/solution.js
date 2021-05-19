/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-9999 <= nums[i], target <= 9999
All the integers in nums are unique.
nums is sorted in an ascending order.
*/

const t1 = [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3] //true
const t2 = [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13] //false



function solution ( [matrix,target] ){
  const rowCount = matrix.length
  const colCount = matrix[0].length
  let lowRow = 0
  let highRow = rowCount - 1
  let lowCol = 0
  let highCol = colCount - 1
  let midRow, midCol
  // BST for Row
  while (lowRow <= highRow){
      midRow = Math.floor((lowRow + highRow) / 2)
      if (target >= matrix[midRow][lowCol] && target <= matrix[midRow][highCol]){
          // BST for Col
          while(lowCol <= highCol){
              midCol = Math.floor((lowCol + highCol) / 2)
              if( matrix[midRow][midCol] === target) return true
              if( target > matrix[midRow][midCol]){
                  lowCol = midCol + 1
              } else {
                  highCol = midCol - 1
              }
          }
      } else if ( target > matrix[midRow][highCol] ){
          lowRow = midRow + 1
      } else {
          highRow = midRow - 1
      }
  }
  return false
}


console.log(solution(t1))
console.log(solution(t2))
// console.log(solution(t3))
// console.log(solution(t4))
// console.log(solution(t5))


module.exports = { solution }
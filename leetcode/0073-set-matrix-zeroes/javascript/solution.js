/*
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

const t1 = [[1,1,1],[1,0,1],[1,1,1]] // [[1,0,1],[0,0,0],[1,0,1]]
const t2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]] // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]



function solution ( matrix ){
  let firstRowZero = false
  let firstColZero = false

  for( let j = 0; j < matrix[0].length; j++){
    if( matrix[0][j] === 0){
      firstRowZero = true
      break
    }
  } 
  for( let i = 0; i < matrix.length; i++){
    if( matrix[i][0] === 0){
      firstColZero = true
      break
    }
  } 

  for( let i = 1; i < matrix.length; i++){
    for( let j = 1; j < matrix[0].length; j++){
      if( matrix[i][j] === 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }

  for( let j = 1; j < matrix[0].length; j++){
    if( matrix[0][j] === 0){
      for(let i = 1; i < matrix.length; i++){
        matrix[i][j] = 0
      }
    }
  }  


  for( let i = 1; i < matrix.length; i++){
    if( matrix[i][0] === 0){
      for(let j = 1; j < matrix[0].length; j++){
        matrix[i][j] = 0
      }
    }
  }  

  if (firstRowZero){
    for(let j = 0; j < matrix[0].length; j++){
      matrix[0][j] = 0
    }
  }
  if (firstColZero){
    for(let i = 0; i < matrix.length; i++){
      matrix[i][0] = 0
    }
  }

  console.log(`firstRowZero`, firstRowZero)
  console.log(`firstColZero`, firstColZero)
  return matrix
}


console.log(solution(t1))
console.log(solution(t2))
// console.log(solution(t3))
// console.log(solution(t4))
// console.log(solution(t5))


module.exports = { solution }
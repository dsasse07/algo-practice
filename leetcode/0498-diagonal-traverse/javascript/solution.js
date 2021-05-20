/*
Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

Example 1:


Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
Example 2:

Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
*/

const t1 = [[1,2,3],[4,5,6],[7,8,9]] // [1,2,4,7,5,3,6,8,9]
const t2 = [[1,2],[3,4]] // [1,2,3,4]
const t3 = [[1]]



function solution ( mat){
    const rowCount = mat.length
    const colCount = mat[0].length
    let [row, col] = [0,0]
    const result = []
    let isAscending = true

    const ascend = () => {
        while (row >= 0 && col < colCount){
            result.push(mat[row][col])
            row = row - 1
            col = col + 1
        }
        if ( col > colCount - 1 && row < 0){
            // Is corner case
            col -= 1
            row += 2
        } else {
            if ( row < 0 ){
                row += 1
            } else {
                row += 2
            }
            if ( col > colCount - 1){
                col -=1
            } 
        }
    }
    const descend = () => {
        while (row < rowCount && col >= 0){
            result.push(mat[row][col])
            row = row + 1
            col = col - 1
        }
        if ( row > rowCount - 1 && col < 0 ){
            //Is corner case
            row -= 1
            col += 2
        } else {
            if ( row > rowCount - 1){
                row -= 1
            } 
            if ( col < 0 ){
                col += 1
            } else {
                col += 2
            }
        }
    }

    while ( row < rowCount && col < colCount ){
        if (isAscending){
            ascend()
        } else {
            descend()
        }
        isAscending = !isAscending
    }
    return result
}


console.log(solution(t1))
console.log(solution(t2))
console.log(solution(t3))
// console.log(solution(t4))
// console.log(solution(t5))


module.exports = { solution }
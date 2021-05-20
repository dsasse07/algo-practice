/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/

const t1 = [[1,2,3],[4,5,6],[7,8,9]] // [1,2,3,6,9,8,7,4,5]
const t2 = [[1,2],[3,4]] // [1,2,3,4]
const t3 = [[1]]
const t4 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] //[1,2,3,4,8,12,11,10,9,5,6,7]



function solution ( mat ){
    let rowMin = 0
    let rowMax = mat.length - 1
    let colMin = 0
    let colMax = mat[0].length - 1
    let dir = 'r'
    const result = []

    const goRight = () => {
        for (let i = colMin; i <= colMax; i++){
            result.push(mat[rowMin][i])
        }
        rowMin++
        dir = 'd'
    }
    const goDown = () => {
        for (let i = rowMin; i <= rowMax; i++){
            result.push(mat[i][colMax])
        }
        colMax--
        dir='l'
    }
    const goLeft = () => {
        for (let i = colMax; i >= colMin; i--){
            result.push(mat[rowMax][i])
        }
        rowMax--
        dir = 'u'
    }
    const goUp = () => {
        for (let i = rowMax; i >= rowMin; i--){
            result.push(mat[i][colMin])
        }
        colMin++
        dir = 'r'
    }

    const fns = {
        'r': goRight,
        'd': goDown,
        'l': goLeft,
        'u': goUp
    }

    while (result.length < mat.length * mat[0].length){
        fns[dir]()
    }

    return result
}

const solution2 = mat => {
    const size = mat.length * mat[0].length
    const result = []

    while (result.length < size){
        const firstRow = mat.shift()
        result.push(...firstRow)

        for( let i = 0; i < mat.length; i++){
            result.push( mat[i].pop())
        }

        const lastRow = mat.pop()
        if (lastRow){
            for (let i = lastRow.length; i > 0; i--){
                result.push(lastRow.pop())
          }
        }

        for(let i = mat.length - 1; i >= 0; i--){
            if ( mat[i].length > 0){
                result.push( mat[i].shift())   
            }
        }
    }
    return result
}


console.log(solution2(t1))
// console.log(solution(t2))
// console.log(solution(t3))
// console.log(solution(t4))
// console.log(solution(t5))


module.exports = { solution }
/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]
 
Constraints:

0 <= rowIndex <= 33

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/

const t1 = 3 // [1,3,3,1]
const t2 = 0 // [1]
const t3 = 1 // [1,1]

function solution ( rowIndex ){
    let currentRow = [1]
    for(let i = 0; i < rowIndex; i++){
        let nextRow = []
        for (let i = 0; i < currentRow.length; i++){
            nextRow[i] = nextRow[i] + currentRow[i] || currentRow[i]
            nextRow[i+1] = nextRow[i+1] + currentRow[i] || currentRow[i]
        }
        currentRow = nextRow
    }
    
    return currentRow
};


console.log(solution2(t1))
console.log(solution(t2))
console.log(solution(t3))


module.exports = { solution }
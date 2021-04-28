/*
let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array){
 // code to write here
}

largestSubarraySum(array)
// 16
*/

let array =   [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
         // *  *   

function solution ( arr ){
  if (arr.length === 0) return
  if (arr.length === 1) return arr[0]
  let sum = 0
  let max = -Infinity

  for ( let i = 0; i < arr.length; i++){
    sum = sum + arr[i]
    if (sum > max){
      max = sum
    } 

    if ( sum < 0 ){
      sum = 0
    }
  }
  return max
}
  
console.log( '16', solution(array) )

module.exports = { solution }
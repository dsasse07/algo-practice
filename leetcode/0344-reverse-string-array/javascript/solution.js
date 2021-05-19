/*
Write a function that reverses a string. The input string is given as an array of characters s.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:

1 <= s.length <= 105
*/
const s1 = ["h","e","l","l","o"]
const s2 = ["H","a","n","n","a","h"]

function solution ( arr ){
  const swap = (arr, i, j) => [arr[i],arr[j]] = [arr[j],arr[i]]

  for( let i = 0, j = arr.length - 1; i <= j; i++, j--){
    swap(arr,i,j)
  }
  return arr
} 

console.log(solution(s1))
console.log(solution(s2))

module.exports = { solution }
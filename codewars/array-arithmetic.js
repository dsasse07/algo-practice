/**
Enable arithmetic operations on arrays, 
where the value of an array is given by the sum of its elements. 

Examples:
[1,2,3] + 4 = 10
[1,1,1] - 3 = 0
['a','b'] + 'c' = 'abc'
PS: Due to intrinsic uncertainty of empty arrays, 
in this kata an empty array is treated as 0. 

For hints see: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
 */

Array.prototype.valueOf = function () {
  const baseValue = typeof this[0] === 'string' ? '' : 0
  return this.reduce((sum, el) => (sum += el), baseValue)
}

console.log('[1,2,3] + 4', [1, 2, 3] + 4)
console.log('[1,1,1] - 3', [1, 1, 1] - 3)
console.log("['a','b'] + 'c'", ['a', 'b'] + 'c')
console.log(
  "['c','o','d','e','w','a','r','s']",
  ['c', 'o', 'd', 'e', 'w', 'a', 'r', 's'] + ''
)

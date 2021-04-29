/*
  Iterates through each value of an array.
  Check to see if that value is equal to target value
    - If yes, return it and complete scan
    - if no, go to next
  - If no match end scan and return no match
*/

const linearSearch = (arr, target) => {
  for( let i = 0; i < arr.length; i++){
    if ( arr[i] === target) return i
  }
  return -1
}

console.log('1', linearSearch([10,15,20,25,30], 15))
console.log('5', linearSearch([9,8,7,6,5,4,3,2,1,0], 4))
console.log('0', linearSearch([100], 100))
console.log('-1', linearSearch([1,2,3,4,5], 6))
console.log('-1', linearSearch([100], 200))